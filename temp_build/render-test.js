"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/node");
const node_1 = require("@angular/ssr/node");
const common_1 = require("@angular/common");
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const main_server_1 = __importDefault(require("./src/main.server")); // This should be the default export from main.server.ts
// The distFolder and indexHtml setup is similar to server.js
const distFolder = (0, node_path_1.join)(process.cwd(), 'dist/indianolympicdream/browser');
const indexHtml = (0, node_fs_1.existsSync)((0, node_path_1.join)(distFolder, 'index.original.html'))
    ? (0, node_path_1.join)(distFolder, 'index.original.html')
    : (0, node_path_1.join)(distFolder, 'index.html');
const commonEngine = new node_1.CommonEngine();
const document = (0, node_fs_1.readFileSync)(indexHtml, 'utf-8');
commonEngine
    .render({
    bootstrap: main_server_1.default,
    document, // Pass the read document content
    url: `http://localhost:3000/`, // Example URL
    publicPath: distFolder,
    providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }],
})
    .then((html) => console.log(html))
    .catch((err) => console.error(err));
