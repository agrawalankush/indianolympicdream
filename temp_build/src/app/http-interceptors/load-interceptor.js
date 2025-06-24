"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadInterceptor = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let LoadInterceptor = (() => {
    let _classDecorators = [(0, core_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var LoadInterceptor = _classThis = class {
        constructor(loaderService, router) {
            this.loaderService = loaderService;
            this.router = router;
        }
        intercept(req, next) {
            const idToken = localStorage.getItem('token');
            // console.log('interceptor visited!!');
            // if (idToken) {
            //     const cloned = req.clone({
            //         headers: req.headers.set('Authorization',
            //             'Bearer ' + idToken)
            //     });
            this.showLoader();
            return next.handle(req)
                .pipe((0, operators_1.tap)((event) => {
                // console.log(event);
                if (event instanceof http_1.HttpResponse) {
                    // do stuff with response if you want
                    // const jwt = event.headers.get('jwttoken');
                    this.onEnd();
                    // console.log(jwt);
                    //  if (jwt) {
                    //    localStorage.setItem('token', jwt);
                    //  }
                }
            }, (error => {
                if (error instanceof http_1.HttpErrorResponse && error.status === 502) {
                    this.onEnd();
                    this.router.navigate(['internal-error']);
                }
                else {
                    this.onEnd();
                    return (0, rxjs_1.throwError)(error);
                }
            })));
            // } else {
            //     return next.handle(req);
            //  }
        }
        onEnd() {
            this.hideLoader();
        }
        showLoader() {
            // console.log('loader show');
            this.loaderService.show();
        }
        hideLoader() {
            // console.log('loader hide');
            this.loaderService.hide();
        }
    };
    __setFunctionName(_classThis, "LoadInterceptor");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LoadInterceptor = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LoadInterceptor = _classThis;
})();
exports.LoadInterceptor = LoadInterceptor;
