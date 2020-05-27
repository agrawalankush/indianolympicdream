const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

//define mongo url string and database
const mongourl = 'mongodb://localhost:27017';
const dbName = 'IndianOlympicDream';

// Connect
const connection = (closure) => {
    return MongoClient.connect(mongourl,{ useNewUrlParser: true }, (err, client) => {
        if (err) return console.log('Connection request to mongo failed',err);
        else{
        console.log('Mongodb connection successful!!');
        let db = client.db(dbName);
        closure(db);
    }
    });
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
    connection((db) => {
        db.collection('sports_new')
            .find({"name":sportname})
            .toArray()
            .then((sports) => {
                res.status(200).json(sports);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
router.get('/allsports', (req, res) => {
    connection((db) => {
        db.collection('all_sports')
            .find({"isimportant": true})
            .toArray()
            .then((allsports) => {
                res.status(200).json(allsports);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.get('/shows', (req, res) => {
    let pageoffset = parseInt(req.query.pageIndex, 10);
    let pagesize = parseInt(req.query.pageSize,10);
    connection((db) => {
    let showsFind = db.collection('shows_data')
            .find({}); //$text: { $search: searchterm }
            showsFind.count(function (err, count) {
            if(err) console.log(err);
        const response = {};
        let totalshows = count;
        // console.log(count);
        showsFind
            .skip(pageoffset)
            .limit(pagesize)
            .toArray()
            .then((shows) => {
                        response.shows = shows;
                        response.total = totalshows;
                res.status(200).json(response);
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    });
});
router.get('/calendar', (req, res) => {
//console.log(req.query);
   // let searchterm = req.query.searchterm;
   let pageoffset = parseInt(req.query.pageIndex, 10);
   let pagesize = parseInt(req.query.pageSize,10);

    connection((db) => {

    let curFind = db.collection('calendar_new')
            .find({"enddate":{ $gte: 1579894153}}); //$text: { $search: searchterm }
    curFind.count(function (err, count) {
        if(err) console.log(err);
        const response = {};
        let totalevents = count;
        // console.log(count);
            curFind
            .sort({startdate:1})
            .skip(pageoffset)
            .limit(pagesize)
            .toArray()
            .then((calendar) => {
                response.calendar = calendar;
                response.total = totalevents;
                res.status(200).json(response);
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });

    });

});
router.get('/athletes', (req, res) => {
   // console.log(req.query.searchedsports, typeof req.query.searchedsports);
   let searchedsports = [];
   if(req.query.searchedsports && typeof req.query.searchedsports  === "string"){
    searchedsports = req.query.searchedsports.split(',');
  }
   let condition = {};
   // console.log(searchedsports,typeof searchedsports);
   if(searchedsports.length === 0) {
    condition = {};
   } else if(searchedsports.length === 1) {
    condition.sportname = {$all:searchedsports};
   } else {
    condition.sportname = {$in:searchedsports};
   }
   let pageoffset = parseInt(req.query.pageIndex, 10);
   let pagesize = parseInt(req.query.pageSize,10);

   connection((db) => {

   let curFind = db.collection('qualified_athletes')
           .find(condition); //$text: { $search: searchterm }
   curFind.count(function (err, count) {
    if(err) console.log(err);
    const response = {};
       let qualifiedathletes = count;
        // console.log(count);
           curFind
           .sort({date_qualified:1})
            .skip(pageoffset)
            .limit(pagesize)
           .toArray()
           .then((athletes) => {
                response.athletes = athletes;
                response.total = qualifiedathletes;
                res.status(200).json(response);
               })
               .catch((err) => {
                   sendError(err, res);
               });
       });

   });

});
/**
router.post('/feedback',function(req,res){
    //let feedback =req.body;
    let feedbackdata = {
     name: req.body.name,
     email:req.body.email,
     created :+new Date(),
     feedback:req.body.feedback
  };
     //console.log(feedbackdata);
     connection((db) => {
        db.collection('feedback')
        .insert(feedbackdata)
        .then((feedbackdata) => {
            response.data = feedbackdata;
            res.json(feedbackdata);
        })
        .catch((err) => {
            sendError(err, res);
        });
     });
    }
 );
 */
module.exports = router;
