"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpInterceptorProviders = void 0;
const http_1 = require("@angular/common/http");
const load_interceptor_1 = require("./load-interceptor");
/** Http interceptor providers in outside-in order */
exports.httpInterceptorProviders = [
    { provide: http_1.HTTP_INTERCEPTORS, useClass: load_interceptor_1.LoadInterceptor, multi: true },
];
