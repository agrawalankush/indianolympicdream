import 'zone.js/node';
import { CommonEngine } from '@angular/ssr/node';
import { APP_BASE_HREF } from '@angular/common';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import AppServerModule from './src/main.server'; // This should be the default export from main.server.ts

// The distFolder and indexHtml setup is similar to server.js
const distFolder = join(process.cwd(), 'dist/indianolympicdream/browser');
const indexHtml = existsSync(join(distFolder, 'index.original.html'))
  ? join(distFolder, 'index.original.html')
  : join(distFolder, 'index.html');

const commonEngine = new CommonEngine();

const document = readFileSync(indexHtml, 'utf-8');

commonEngine
  .render({
    bootstrap: AppServerModule,
    document, // Pass the read document content
    url: `http://localhost:3000/`, // Example URL
    publicPath: distFolder,
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  })
  .then((html) => console.log(html))
  .catch((err) => console.error(err));
