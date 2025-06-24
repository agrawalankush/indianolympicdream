// These are important and needed before anything else
require('zone.js/node');

const express = require('express');
const path = require('path');
const compression = require('compression');
const http = require('http');
const helmet = require('helmet');
const config = require('./server/config/config');
const { CommonEngine } = require('@angular/ssr/node');
const { APP_BASE_HREF } = require('@angular/common');
const { existsSync } = require('node:fs');
const AppServerModule = require('./src/main.server').default;

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

const distFolder = path.join(process.cwd(), 'dist/indianolympicdream/browser');
const indexHtml = existsSync(path.join(distFolder, 'index.original.html'))
  ? path.join(distFolder, 'index.original.html')
  : path.join(distFolder, 'index.html');

const commonEngine = new CommonEngine();

app.set('view engine', 'html');
app.set('views', distFolder);

// Serve static files from /browser
app.get('*.*', express.static(distFolder, {
  maxAge: '1y'
}));

// API location
app.use('/api', api);

// All regular routes use the Angular engine
app.get('*', (req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req;

  commonEngine
    .render({
      bootstrap: AppServerModule,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: distFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
});

//Set Port
app.set('port', config.PORT);

const server = http.createServer(app);

// Bind to all interfaces for Docker Network compatibility
server.listen(config.PORT, '0.0.0.0', () => {
  console.log(`Server running on 0.0.0.0:${config.PORT} in ${config.NODE_ENV} mode`);
});
