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
exports.ScheduleComponent = void 0;
const core_1 = require("@angular/core");
const event_details_component_1 = require("../event-details/event-details.component");
let ScheduleComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-schedule',
            templateUrl: './schedule.component.html',
            styleUrls: ['./schedule.component.scss'],
            standalone: false
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ScheduleComponent = _classThis = class {
        constructor(route, router, dialog, sportservice) {
            this.route = route;
            this.router = router;
            this.dialog = dialog;
            this.sportservice = sportservice;
            this.allsports = [
                'Archery',
                'Athletics',
                'Badminton',
                'Boxing',
                'Equestrian',
                'Fencing',
                'Golf',
                'Gymnastics',
                'Hockey',
                'Judo',
                'Rowing',
                'Shooting',
                'Sailing',
                'Swimming',
                'TableTennis',
                'Tennis',
                'Weightlifting',
                'Wrestling'
            ];
            this.alldates = [
                '24July',
                '25July',
                '26July',
                '27July',
                '28July',
                '29July',
                '30July',
                '31July',
                '01Aug',
                '02Aug',
                '03Aug',
                '04Aug',
                '05Aug',
                '06Aug',
                '07Aug',
            ];
        }
        ngOnInit() {
            this.route.queryParams
                .subscribe(params => {
                // console.log(params);
                if (Object.keys(params).length === 0 && params.constructor === Object) {
                    this.getSchedule('');
                }
                else {
                    // console.log(params, params.date, params.sport);
                    if (params.sport === undefined) {
                        this.getByDate = true;
                        this.sport = '';
                        this.date = params.date;
                        this.getScheduleByDate(params.date);
                    }
                    else if (params.date === undefined) {
                        this.getByDate = false;
                        this.date = '';
                        this.sport = params.sport;
                        this.getSchedule(params.sport);
                    }
                    // this.pageIndex = parseInt(params.pageIndex);
                    // this.pageSize = parseInt(params.pazeSize);
                }
            });
        }
        originalOrder() { return 0; }
        selectedSport(sport) {
            console.log(sport);
            this.router.navigate([], {
                relativeTo: this.route,
                queryParams: { sport: sport },
                queryParamsHandling: 'merge'
            });
        }
        getSchedule(selectedport) {
            this.sportservice.getschedule(selectedport)
                .subscribe((res) => {
                // console.log(res);
                this.schedule = res.schedule;
                this.length = res.total;
            }, (error) => {
                // console.log(error);
                this.errmsg = error.error;
            });
        }
        getScheduleByDate(date) {
            this.getByDate = true;
            this.sportservice.getschedulebydate(date)
                .subscribe((res) => {
                // console.log(res);
                this.schedule = res.schedule;
                this.length = res.total;
            }, (error) => {
                // console.log(error);
                this.errmsg = error.error;
            });
        }
        showEvents(sport, events, Bydate) {
            if (Bydate) {
                sport = Bydate;
            }
            const dialogRef = this.dialog.open(event_details_component_1.EventDetailsComponent, {
                // width: '80%',
                // height: '50%',
                data: { sportname: sport, events: events },
                panelClass: 'custom-dialog'
            });
            // dialogRef.afterClosed().subscribe(result => {
            //   console.log('The dialog was closed');
            // });
        }
        ngOnDestroy() {
        }
    };
    __setFunctionName(_classThis, "ScheduleComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ScheduleComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ScheduleComponent = _classThis;
})();
exports.ScheduleComponent = ScheduleComponent;
