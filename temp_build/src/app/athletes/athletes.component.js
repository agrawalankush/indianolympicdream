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
exports.AthletesComponent = void 0;
const core_1 = require("@angular/core");
const paginator_1 = require("@angular/material/paginator");
// import { Athletes} from '../models/app-models';
const keycodes_1 = require("@angular/cdk/keycodes");
const forms_1 = require("@angular/forms");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let AthletesComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-athletes',
            templateUrl: './athletes.component.html',
            styleUrls: ['./athletes.component.scss'],
            standalone: false
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _paginator_decorators;
    let _paginator_initializers = [];
    let _paginator_extraInitializers = [];
    let _sportInput_decorators;
    let _sportInput_initializers = [];
    let _sportInput_extraInitializers = [];
    let _matAutocomplete_decorators;
    let _matAutocomplete_initializers = [];
    let _matAutocomplete_extraInitializers = [];
    let _chipGrid_decorators;
    let _chipGrid_initializers = [];
    let _chipGrid_extraInitializers = [];
    var AthletesComponent = _classThis = class {
        constructor(route, router, sportservice) {
            this.route = route;
            this.router = router;
            this.sportservice = sportservice;
            this.paginator = __runInitializers(this, _paginator_initializers, void 0);
            // MatPaginator Inputs
            this.length = __runInitializers(this, _paginator_extraInitializers);
            this.pageSize = 24;
            this.pageSizeOptions = [24, 48, 96];
            this.pageIndex = 0;
            // Search autocomplete Inputs
            this.visible = true;
            this.selectable = true;
            this.removable = true;
            this.separatorKeysCodes = [keycodes_1.ENTER, keycodes_1.COMMA];
            this.sportCtrl = new forms_1.UntypedFormControl();
            this.sports = [];
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
            this.sportInput = __runInitializers(this, _sportInput_initializers, void 0);
            this.matAutocomplete = (__runInitializers(this, _sportInput_extraInitializers), __runInitializers(this, _matAutocomplete_initializers, void 0));
            this.chipGrid = (__runInitializers(this, _matAutocomplete_extraInitializers), __runInitializers(this, _chipGrid_initializers, void 0));
            __runInitializers(this, _chipGrid_extraInitializers);
            this.route = route;
            this.router = router;
            this.sportservice = sportservice;
            this.filteredSports = this.sportCtrl.valueChanges.pipe((0, operators_1.map)((sport) => sport ? this._filter(sport) : this.getallsports()));
        }
        ngOnInit() {
            this.route.queryParams
                .subscribe(params => {
                // console.log(params);
                if (Object.keys(params).length === 0 && params.constructor === Object) {
                    this.SearchAthletes("[]", "0", "24");
                }
                else {
                    this.sports = JSON.parse(params.sports);
                    // this.pageIndex = parseInt(params.pageIndex);
                    // this.pageSize = parseInt(params.pazeSize);
                    this.SearchAthletes(params.sports, params.pageIndex, params.pazeSize);
                }
            });
        }
        get queryParams() {
            const index = this.paginator.pageIndex * this.paginator.pageSize;
            const size = this.paginator.pageSize;
            const sports = JSON.stringify(this.sports);
            const queryParams = { sports: sports, pageIndex: index, pazeSize: size };
            return queryParams;
        }
        _filter(value) {
            const filterValue = value.toLowerCase();
            if (this.sports.length > 0) {
                const filteredallsports = this.allsports.filter(sport => !(this.sports.includes(sport)));
                return filteredallsports.filter(sport => sport.toLowerCase().indexOf(filterValue) === 0);
            }
            else {
                return this.allsports.filter(sport => sport.toLowerCase().indexOf(filterValue) === 0);
            }
        }
        getallsports() {
            if (this.sports) {
                // console.log(this.allsports.filter(sport => !(this.sports.includes(sport))))
                return this.allsports.filter(sport => !(this.sports.includes(sport)));
            }
            else {
                return this.allsports.slice();
            }
        }
        prepareQueryUrl() {
            this.router.navigate([], {
                relativeTo: this.route,
                queryParams: this.queryParams,
                // queryParamsHandling: 'merge'
            });
        }
        handlePageEvent(e) {
            // console.log(e);
            this.prepareQueryUrl();
        }
        selected(event) {
            this.sports.push(event.option.viewValue);
            this.sportInput.nativeElement.value = '';
            this.sportCtrl.setValue(null);
            this.paginator.pageIndex = 0;
            this.prepareQueryUrl();
        }
        remove(sport) {
            const index = this.sports.indexOf(sport);
            if (index >= 0) {
                this.sports.splice(index, 1);
                this.paginator.pageIndex = 0;
                this.prepareQueryUrl();
            }
        }
        SearchAthletes(selectedsports, pageIndex, pageSize) {
            this.sportservice.getathletes(selectedsports, pageIndex, pageSize)
                .pipe((0, operators_1.catchError)((error) => {
                this.errmsg = error.message || 'An error occurred';
                return (0, rxjs_1.of)({ athletes: [], total: 0 });
            }))
                .subscribe((res) => {
                this.athletes = res.athletes;
                this.length = res.total;
            });
        }
    };
    __setFunctionName(_classThis, "AthletesComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _paginator_decorators = [(0, core_1.ViewChild)(paginator_1.MatPaginator)];
        _sportInput_decorators = [(0, core_1.ViewChild)('sportInput')];
        _matAutocomplete_decorators = [(0, core_1.ViewChild)('auto')];
        _chipGrid_decorators = [(0, core_1.ViewChild)('chipGrid')];
        __esDecorate(null, null, _paginator_decorators, { kind: "field", name: "paginator", static: false, private: false, access: { has: obj => "paginator" in obj, get: obj => obj.paginator, set: (obj, value) => { obj.paginator = value; } }, metadata: _metadata }, _paginator_initializers, _paginator_extraInitializers);
        __esDecorate(null, null, _sportInput_decorators, { kind: "field", name: "sportInput", static: false, private: false, access: { has: obj => "sportInput" in obj, get: obj => obj.sportInput, set: (obj, value) => { obj.sportInput = value; } }, metadata: _metadata }, _sportInput_initializers, _sportInput_extraInitializers);
        __esDecorate(null, null, _matAutocomplete_decorators, { kind: "field", name: "matAutocomplete", static: false, private: false, access: { has: obj => "matAutocomplete" in obj, get: obj => obj.matAutocomplete, set: (obj, value) => { obj.matAutocomplete = value; } }, metadata: _metadata }, _matAutocomplete_initializers, _matAutocomplete_extraInitializers);
        __esDecorate(null, null, _chipGrid_decorators, { kind: "field", name: "chipGrid", static: false, private: false, access: { has: obj => "chipGrid" in obj, get: obj => obj.chipGrid, set: (obj, value) => { obj.chipGrid = value; } }, metadata: _metadata }, _chipGrid_initializers, _chipGrid_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AthletesComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AthletesComponent = _classThis;
})();
exports.AthletesComponent = AthletesComponent;
