const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const fs = require('fs');
const compression = require('compression');
const http = require('http');
const app = express();


// API file for interacting with MongoDB
const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
 //Self sign cert and key for locally running on https
// const certOptions = {
//     key: fs.readFileSync(path.resolve('./https-server/keys/server.key')),
//     cert: fs.readFileSync(path.resolve('./https-server/keys/server.crt'))
//   };
//gzip cpmpression
app.use(compression());

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'The_Olympic_Dream')));
app.use(express.static(path.join(__dirname, 'images')));

// API location
app.use('/api', api);
// app.use(function(err,req,res,next){
//   console.log(err);
// });
// Send all other requests to the Angular app
app.get('*', (req, res) => {
    // res.contentType('text/javascript');
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));