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
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
// components
const home_component_1 = require("./home/home.component");
const shows_component_1 = require("./shows/shows.component");
const pagenotfound_component_1 = require("./pagenotfound/pagenotfound.component");
const about_component_1 = require("./about/about.component");
const sport_details_component_1 = require("./sport-details/sport-details.component");
const calendar_component_1 = require("./calendar/calendar.component");
const athletes_component_1 = require("./athletes/athletes.component");
// import { AllSportsResolverService } from './home/all-sports-resolver.service';
const server_error_component_1 = require("./server-error/server-error.component");
const schedule_component_1 = require("./schedule/schedule.component");
const stories_component_1 = require("./stories/stories.component");
const feedback_component_1 = require("./feedback/feedback.component");
const routes = [
    {
        path: 'home', component: home_component_1.HomeComponent, data: { animation: 'HomePage' }
        // resolve: {
        //   allsportsdata: AllSportsResolverService
        // }
    },
    { path: 'sports/:sportname', component: sport_details_component_1.SportDetailsComponent, data: { animation: 'SportDetailsPage' } },
    { path: 'calendar', component: calendar_component_1.CalendarComponent },
    { path: 'athletes', component: athletes_component_1.AthletesComponent, data: { animation: 'AthletesPage' } },
    { path: 'schedule', component: schedule_component_1.ScheduleComponent, data: { animation: 'SchedulePage' } },
    { path: 'shows', component: shows_component_1.ShowsComponent, data: { animation: 'ShowsPage' } },
    { path: 'stories', component: stories_component_1.StoriesComponent },
    { path: 'about', component: about_component_1.AboutComponent, data: { animation: 'AboutPage' } },
    { path: 'internal-error', component: server_error_component_1.ServerErrorComponent },
    { path: 'feedback', component: feedback_component_1.FeedbackComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pagenotfound_component_1.PagenotfoundComponent }
];
let AppRoutingModule = (() => {
    let _classDecorators = [(0, core_1.NgModule)({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AppRoutingModule = _classThis = class {
    };
    __setFunctionName(_classThis, "AppRoutingModule");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppRoutingModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppRoutingModule = _classThis;
})();
exports.AppRoutingModule = AppRoutingModule;
