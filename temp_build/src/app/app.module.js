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
exports.AppModule = void 0;
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const material_module_1 = require("./material/material.module");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const forms_1 = require("@angular/forms");
const animations_1 = require("@angular/platform-browser/animations");
const index_1 = require("./http-interceptors/index");
// pipes
const humanize_1 = require("./shared/components/loader/pipes/humanize");
// componets
const home_component_1 = require("./home/home.component");
const pagenotfound_component_1 = require("./pagenotfound/pagenotfound.component");
const shows_component_1 = require("./shows/shows.component");
const safepipe_1 = require("./safepipe");
const about_component_1 = require("./about/about.component");
const sport_details_component_1 = require("./sport-details/sport-details.component");
const calendar_component_1 = require("./calendar/calendar.component");
const athletes_component_1 = require("./athletes/athletes.component");
const service_worker_1 = require("@angular/service-worker");
const environment_1 = require("../environments/environment");
const loader_component_1 = require("./shared/components/loader/loader.component");
const server_error_component_1 = require("./server-error/server-error.component");
const schedule_component_1 = require("./schedule/schedule.component");
const event_details_component_1 = require("./event-details/event-details.component");
const stories_component_1 = require("./stories/stories.component");
const feedback_component_1 = require("./feedback/feedback.component");
const analytics_service_1 = require("./services/analytics.service");
let AppModule = (() => {
    let _classDecorators = [(0, core_1.NgModule)({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                pagenotfound_component_1.PagenotfoundComponent,
                shows_component_1.ShowsComponent,
                safepipe_1.SafePipe,
                sport_details_component_1.SportDetailsComponent,
                calendar_component_1.CalendarComponent,
                athletes_component_1.AthletesComponent,
                about_component_1.AboutComponent,
                loader_component_1.LoaderComponent,
                humanize_1.HumanizePipe,
                server_error_component_1.ServerErrorComponent,
                schedule_component_1.ScheduleComponent,
                event_details_component_1.EventDetailsComponent,
                stories_component_1.StoriesComponent,
                feedback_component_1.FeedbackComponent
            ],
            bootstrap: [app_component_1.AppComponent], imports: [platform_browser_1.BrowserModule,
                material_module_1.MaterialModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                service_worker_1.ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment_1.environment.production, registrationStrategy: 'registerWhenStable:30000' })
            ], providers: [
                index_1.httpInterceptorProviders,
                (0, http_1.provideHttpClient)((0, http_1.withInterceptorsFromDi)()),
                analytics_service_1.AnalyticsService,
                (0, platform_browser_1.provideClientHydration)((0, platform_browser_1.withEventReplay)())
            ]
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AppModule = _classThis = class {
    };
    __setFunctionName(_classThis, "AppModule");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppModule = _classThis;
})();
exports.AppModule = AppModule;
