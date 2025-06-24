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
exports.SportsdataService = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let SportsdataService = (() => {
    let _classDecorators = [(0, core_1.Injectable)({
            providedIn: 'root'
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var SportsdataService = _classThis = class {
        constructor(http) {
            this.http = http;
            this.httpOptions = {
                headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
            };
        }
        getallsports() {
            return this.http.get(`/api/allsports`)
                .pipe((0, operators_1.retry)(3), (0, operators_1.catchError)(this.handleError));
        }
        getsports(sportname) {
            return this.http.get(`/api/sports/${sportname}`)
                .pipe((0, operators_1.retry)(2));
        }
        getcalendar(filter, pageIndex, pageSize) {
            const params = new http_1.HttpParams()
                .set('searchterm', filter)
                .set('pageIndex', pageIndex.toString())
                .set('pageSize', pageSize.toString());
            return this.http.get(`/api/calendar`, { params })
                .pipe((0, operators_1.retry)(2), (0, operators_1.catchError)(this.handleError));
        }
        getathletes(sports, pageIndex, pageSize) {
            let params = new http_1.HttpParams()
                .set('pageIndex', pageIndex)
                .set('pageSize', pageSize);
            params = params.append('searchedsports', JSON.parse(sports));
            return this.http.get(`/api/athletes`, { params })
                .pipe((0, operators_1.retry)(2), (0, operators_1.catchError)(this.handleError));
        }
        getschedule(sport) {
            let params = new http_1.HttpParams();
            // .set('pageIndex', pageIndex)
            // .set('pageSize', pageSize);
            params = params.append('searchedsports', sport);
            return this.http.get(`/api/schedule`, { params })
                .pipe((0, operators_1.retry)(1), (0, operators_1.catchError)(this.handleError));
        }
        getschedulebydate(date) {
            let params = new http_1.HttpParams();
            // .set('pageIndex', pageIndex)
            // .set('pageSize', pageSize);
            params = params.append('date', date);
            return this.http.get(`/api/schedulebydate`, { params })
                .pipe((0, operators_1.retry)(1), (0, operators_1.catchError)(this.handleError));
        }
        getshowsdata(pageIndex, pageSize) {
            const params = new http_1.HttpParams()
                .set('pageIndex', pageIndex.toString())
                .set('pageSize', pageSize.toString());
            return this.http.get(`/api/shows`, { params })
                .pipe((0, operators_1.retry)(2), (0, operators_1.catchError)(this.handleError));
        }
        postfeedback(feedbackjson) {
            return this.http.post(`/api/feedback`, feedbackjson, this.httpOptions)
                .pipe((0, operators_1.catchError)(this.handleError));
        }
        handleError(error) {
            if (error.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('An error occurred:', error.error.message);
                // return an observable with a user-facing error message
                return (0, rxjs_1.throwError)('Your network is playing tricks on you, please fix and try again!');
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.error(`Backend returned code ${error.status}, ` +
                    `body was: ${error.error.message}`);
                return (0, rxjs_1.throwError)('I screwed-up on my server somewhere, Please try again after sometime or report to me directly!');
            }
        }
    };
    __setFunctionName(_classThis, "SportsdataService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SportsdataService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SportsdataService = _classThis;
})();
exports.SportsdataService = SportsdataService;
