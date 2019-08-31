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
    data: {
        requesteddata:[]
    },
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
router.get('/allsports', (req, res) => {
    connection((db) => {
        db.collection('all_sports')
            .find({})
            .toArray()
            .then((allsports) => {
                response.data = allsports;
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
     console.log(req.query);
   let searchterm = req.query.searchterm; 
   let pageoffset = parseInt(req.query.pageIndex, 10);
   let pagesize = parseInt(req.query.pageSize,10);
    
    connection((db) => {

    let curFind = db.collection('calendar_new')
            .find({}); //$text: { $search: searchterm }
    curFind.count(function (e, count) {
        let doccount = count;
        // console.log(count);
            curFind
            .sort({startdate:1})
            .skip(pageoffset)
            .limit(pagesize)
            .toArray()
            .then((calendar) => {
                let response = {
                    status: 200,
                    data: {
                        calendar:calendar,
                        total:doccount
                    },
                    message: null
                };
                    res.json(response);
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });       
            
    });
    
});
router.get('/athletes', (req, res) => {
  //console.log(req.query);
  // let searchterm = req.query.searchterm; 
  let pageoffset = parseInt(req.query.pageIndex, 10);
  let pagesize = parseInt(req.query.pageSize,10);
   
   connection((db) => {

   let curFind = db.collection('athletes')
           .find({}); //$text: { $search: searchterm }
   curFind.count(function (e, count) {
       let doccount = count;
       // console.log(count);
           curFind
           .sort({date_qualified:1})
           .skip(pageoffset)
           .limit(pagesize)
           .toArray()
           .then((athletes) => {
               let response = {
                   status: 200,
                   data: {
                    athletes:athletes,
                    total:doccount
                   },
                   message: null
               };
                   res.json(response);
               })
               .catch((err) => {
                   sendError(err, res);
               });
       });       
           
   });
   
});
module.exports = router;
