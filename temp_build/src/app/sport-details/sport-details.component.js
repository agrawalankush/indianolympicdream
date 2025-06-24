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
exports.SportDetailsComponent = void 0;
const core_1 = require("@angular/core");
const events_dialog_component_1 = require("./events-dialog.component");
const operators_1 = require("rxjs/operators");
let SportDetailsComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-sport-details',
            templateUrl: './sport-details.component.html',
            styleUrls: ['./sport-details.component.scss'],
            standalone: false
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var SportDetailsComponent = _classThis = class {
        constructor(route, sportservice, dialog) {
            this.route = route;
            this.sportservice = sportservice;
            this.dialog = dialog;
            this.selectedCategory = null;
            this.selectedEvents = [];
            this.allsports = ['Archery', 'Athletics', 'Badminton', 'Boxing', 'Equestrian',
                'Fencing', 'Golf', 'Gymnastics', 'Hockey', 'Judo', 'Rowing', 'Shooting',
                'Sailing', 'Swimming', 'TableTennis', 'Tennis', 'Weightlifting', 'Wrestling'];
            this.categoryIcons = {
                men: 'man',
                women: 'woman',
                mixed: 'groups',
                unisex: 'wc'
            };
        }
        ngOnInit() {
            this.route.paramMap.pipe((0, operators_1.map)(params => params.get('sportname')), (0, operators_1.switchMap)(sportname => this.sportservice.getsports(sportname))).subscribe(res => {
                this.sportsdetails = res[0];
                this.qualifiedAthletesString = JSON.stringify([this.sportsdetails.name]);
            });
        }
        getCategoryShorthand(category) {
            return this.categoryIcons[category.toLowerCase()] || category.charAt(0).toUpperCase();
        }
        showEvents(category) {
            this.selectedCategory = category.key;
            this.selectedEvents = category.value;
            this.dialog.open(events_dialog_component_1.EventsDialogComponent, {
                data: {
                    events: this.selectedEvents,
                    category: this.selectedCategory,
                    sportName: this.sportsdetails.name
                },
                width: '90%',
                maxWidth: '800px'
            });
        }
    };
    __setFunctionName(_classThis, "SportDetailsComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SportDetailsComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SportDetailsComponent = _classThis;
})();
exports.SportDetailsComponent = SportDetailsComponent;
