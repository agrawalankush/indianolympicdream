const express = require('express');
const path = require('path');
const compression = require('compression');
const http = require('http');
const helmet = require('helmet');
const config = require('./server/config/config');

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

// API location
app.use('/api', api);

// Send all other requests to the Angular app - update path to include project name
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/indianolympicdream/index.html'));
});

//Set Port
app.set('port', config.PORT);

const server = http.createServer(app);

// Bind to all interfaces for Docker Network compatibility
server.listen(config.PORT, '0.0.0.0', () => {
  console.log(`Server running on 0.0.0.0:${config.PORT} in ${config.NODE_ENV} mode`);
});
