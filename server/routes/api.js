const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        if (err) return console.log(err);
        else{
        console.log('Mongodb connection successful!!');
        let db = client.db('IndianOlympicDream');
        closure(db);
    }
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/sports/:sportname', (req, res) => {
    sportname=req.params.sportname;
    connection((db) => {
        db.collection('sports')
            .find({"sportname":sportname})
            .toArray()
            .then((sports) => {
                response.data = sports;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
router.get('/shows', (req, res) => {
    connection((db) => {
        db.collection('shows_data')
            .find({})
            .toArray()
            .then((sports) => {
                response.data = sports;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
router.get('/calendar', (req, res) => {
    //sportname=req.params.sportname;
    console.log(req.query);
    connection((db) => {
        db.collection('calendar_new')
            .find({})
            .sort({startdate: 1})
            .toArray()
            .then((calendar) => {
                response.data = calendar;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
module.exports = router;
