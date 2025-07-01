const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
const config = require('../config/config');

let cachedClient = null;

// Improved connection with better error logging
const connection = async (closure) => {
  try {
    let client = cachedClient;
    
    if (!client || !client.topology || !client.topology.isConnected()) {
      console.log(`🔗 Attempting MongoDB connection...`);
      
      const connectionOptions = {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        connectTimeoutMS: 10000,
        maxIdleTimeMS: 30000,
        family: 4 // Force IPv4
      };
      
      // Add authSource only for production (when AUTH_SOURCE is provided)
      if (config.NODE_ENV === 'production' && config.MONGODB.AUTH_SOURCE) {
        connectionOptions.authSource = config.MONGODB.AUTH_SOURCE;
      }
      
      client = await MongoClient.connect(config.MONGODB.URI, connectionOptions);
      cachedClient = client;
      console.log(`✅ MongoDB connection successful to ${config.NODE_ENV} environment!`);
    }
    
    const db = client.db(config.MONGODB.DB_NAME);
    return await closure(db);
  } catch (err) {
    console.error('❌ MongoDB connection failed:');
    console.error(`URI: ${config.MONGODB.URI.replace(/:([^:@]+)@/, ':***@')}`);
    console.error(`Database: ${config.MONGODB.DB_NAME}`);
    console.error(`Auth Source: ${config.MONGODB.AUTH_SOURCE || 'none'}`);
    console.error(`Error: ${err.message}`);
    throw err;
  }
};

// Response handling
const response = {};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = 'Internal server error, looks like I screwed up somewhere!!' ;
    res.status(501).json(response);
};

// Get users
router.get('/sports/:sportname', (req, res) => {
    const sportname = req.params.sportname;
    const edition = req.query.edition || 'la2028';
    connection(async (db) => {
        try {
            const sports = await db.collection('sports_new')
                .find({"name":sportname, "editions": { $in: [edition] }})
                .toArray();
            res.status(200).json(sports);
        } catch (err) {
            sendError(err, res);
        }
    });
});

router.get('/allsports', (req, res) => {
    const edition = req.query.edition || 'la2028';
    connection(async (db) => {
        try {
            const allsports = await db.collection('all_sports')
                .find({"isimportant": true, "editions": { $in: [edition] }})
                .toArray();
            res.status(200).json(allsports);
        } catch (err) {
            sendError(err, res);
        }
    });
});

router.get('/shows', (req, res) => {
    let pageoffset = parseInt(req.query.pageIndex, 10);
    let pagesize = parseInt(req.query.pageSize,10);
    connection(async (db) => {
        try {
            const collection = db.collection('shows_data');
            const totalshows = await collection.countDocuments({});
            const shows = await collection
                .find({})                
                .skip(pageoffset)
                .limit(pagesize)
                .toArray();
            const response = { shows, total: totalshows };
            res.status(200).json(response);
        } catch (err) {
            sendError(err, res);
        }
    });
});

router.get('/schedule', (req, res) => {
    let searchedsports = req.query.searchedsports;
    const edition = req.query.edition || 'la2028';
    let condition = {"editions": { $in: [edition] }};
    if(searchedsports) {
        condition.sportname = searchedsports;
    }
    connection(async (db) => {
        try {
            const collection = db.collection('schedule');
            const sportstotal = await collection.countDocuments(condition);
            const scheduleData = await collection
                .find(condition)
                .sort({sportname:1})
                .toArray();
            const response = { schedule: scheduleData, total: sportstotal };
            res.status(200).json(response);
        } catch (err) {
            sendError(err, res);
        }
    });
});

router.get('/schedulebydate', (req, res) => {
    let date = req.query.date;
    const edition = req.query.edition || 'la2028';
    let condition = {"editions": { $in: [edition] }};
    if(date) {
        condition.sportname = date;
    }
    connection(async (db) => {
        try {
            const collection = db.collection('scheduleByDate');
            const sportstotal = await collection.countDocuments(condition);
            const scheduleData = await collection
                .find(condition)
                .sort({index:1})
                .toArray();
            const response = { schedule: scheduleData, total: sportstotal };
            res.status(200).json(response);
        } catch (err) {
            sendError(err, res);
        }
    });
});

router.get('/calendar', (req, res) => {
    let pageoffset = parseInt(req.query.pageIndex, 10);
    let pagesize = parseInt(req.query.pageSize,10);
    const edition = req.query.edition || 'la2028';

    connection(async (db) => {
        try {
            const collection = db.collection('calendar_new');
            const condition = {"enddate":{ $gte: 1579894153}, "editions": { $in: [edition] }};
            const totalevents = await collection.countDocuments(condition);
            const calendar = await collection
                .find(condition)
                .sort({startdate:1})
                .skip(pageoffset)
                .limit(pagesize)
                .toArray();
            const response = { calendar, total: totalevents };
            res.status(200).json(response);
        } catch (err) {
            sendError(err, res);
        }
    });
});

router.get('/athletes', (req, res) => {
    let searchedsports = [];
    if(req.query.searchedsports && typeof req.query.searchedsports  === "string"){
        searchedsports = req.query.searchedsports.split(',');
    }
    let condition = {"editions": { $in: [req.query.edition || 'la2028'] }};
    if(searchedsports.length === 0) {
        // condition remains just edition
    } else if(searchedsports.length === 1) {
        condition.sportname = {$all:searchedsports};
    } else {
        condition.sportname = {$in:searchedsports};
    }
    let pageoffset = parseInt(req.query.pageIndex, 10);
    let pagesize = parseInt(req.query.pageSize,10);

    connection(async (db) => {
        try {
            const collection = db.collection('qualified_athletes');
            const qualifiedathletes = await collection.countDocuments(condition);
            const athletes = await collection
                .find(condition)
                .sort({date_qualified:1})
                .skip(pageoffset)
                .limit(pagesize)
                .toArray();
            const response = { athletes, total: qualifiedathletes };
            res.status(200).json(response);
        } catch (err) {
            sendError(err, res);
        }
    }
    );
});

module.exports = router;