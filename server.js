const express = require('express');
const path = require('path');
// const fs = require('fs');
const compression = require('compression');
const http = require('http');
const helmet = require('helmet');
const app = express();

// API file for interacting with MongoDB
const api = require('./server/routes/api');

// For adding security headers
app.use(helmet());

// Parsers
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//gzip cpmpression
app.use(compression());

// Angular DIST output folder - update path to include project name
app.use(express.static(path.join(__dirname, 'dist/indianolympicdream')));
// app.use(express.static(path.join(__dirname, 'The_Olympic_Dream')));
// app.use(express.static(path.join(__dirname, 'images')));

// API location
app.use('/api', api);

// app.use(function(err,req,res,next){
//   console.log(err);
// });

// Send all other requests to the Angular app - update path to include project name
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/indianolympicdream/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
process.env.NODE_ENV = 'production';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
