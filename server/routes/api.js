const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

// Define mongo url string and database based on environment
const environment = process.env.NODE_ENV || 'development';
const mongourl = environment === 'production' 
    ? process.env.MONGO_URI_PROD 
    : process.env.MONGO_URI_DEV;
const dbName = process.env.MONGO_DB_NAME;

// Connect using promises instead of callbacks
const connection = async (closure) => {
    try {
        const client = await MongoClient.connect(mongourl, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        console.log(`Mongodb connection successful to ${environment} environment!`);
        const db = client.db(dbName);
        await closure(db);
        return client;
    } catch (err) {
        console.log('Connection request to mongo failed', err);
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
    sportname=req.params.sportname;
    connection(async (db) => {
        try {
            const sports = await db.collection('sports_new')
                .find({"name":sportname})
                .toArray();
            res.status(200).json(sports);
        } catch (err) {
            sendError(err, res);
        }
    });
});
router.get('/allsports', (req, res) => {
    connection(async (db) => {
        try {
            const allsports = await db.collection('all_sports')
                .find({"isimportant": true})
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
            const showsFind = db.collection('shows_data').find({});
            const totalshows = await showsFind.count();
            const shows = await showsFind
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
    let condition = {};
    if(searchedsports) {
        condition = {"sportname": searchedsports};
    }
    connection(async (db) => {
        try {
            const schedule = db.collection('schedule').find(condition).sort({sportname:1});
            const sportstotal = await schedule.count();
            const scheduleData = await schedule.toArray();
            const response = { schedule: scheduleData, total: sportstotal };
            res.status(200).json(response);
        } catch (err) {
            sendError(err, res);
        }
    });
});
router.get('/schedulebydate', (req, res) => {
    let date = req.query.date;
    let condition = {};
    if(date) {
        condition = { "sportname" : date};
    }
    connection(async (db) => {
        try {
            const schedule = db.collection('scheduleByDate').find(condition).sort({index:1});
            const sportstotal = await schedule.count();
            const scheduleData = await schedule.toArray();
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

    connection(async (db) => {
        try {
            const curFind = db.collection('calendar_new')
                .find({"enddate":{ $gte: 1579894153}})
                .sort({startdate:1});
            const totalevents = await curFind.count();
            const calendar = await curFind
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
    let condition = {};
    if(searchedsports.length === 0) {
        condition = {};
    } else if(searchedsports.length === 1) {
        condition.sportname = {$all:searchedsports};
    } else {
        condition.sportname = {$in:searchedsports};
    }
    let pageoffset = parseInt(req.query.pageIndex, 10);
    let pagesize = parseInt(req.query.pageSize,10);

    connection(async (db) => {
        try {
            const curFind = db.collection('qualified_athletes')
                .find(condition)
                .sort({date_qualified:1});
            const qualifiedathletes = await curFind.count();
            const athletes = await curFind
                .skip(pageoffset)
                .limit(pagesize)
                .toArray();
            const response = { athletes, total: qualifiedathletes };
            res.status(200).json(response);
        } catch (err) {
            sendError(err, res);
        }
    });
});

router.post('/feedback',function(req,res){
    let feedbackdata = {
        name: req.body.name,
        email:req.body.email,
        created :+new Date(),
        feedback:req.body.feedback
    };
    connection(async (db) => {
        try {
            const feedbackResult = await db.collection('feedback').insertOne(feedbackdata);
            response.data = feedbackResult;
            res.json(feedbackResult);
        } catch (err) {
            sendError(err, res);
        }
    });
});
module.exports = router;
