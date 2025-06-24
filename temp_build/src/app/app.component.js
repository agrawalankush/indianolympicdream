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
exports.AppComponent = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const animations_1 = require("./animations");
const operators_1 = require("rxjs/operators");
let AppComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            animations: [
                animations_1.slideInAnimation
            ],
            standalone: false
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _componentCssClass_decorators;
    let _componentCssClass_initializers = [];
    let _componentCssClass_extraInitializers = [];
    var AppComponent = _classThis = class {
        constructor(router, route, swupdateservice, overlayContainer, analyticsService) {
            this.router = router;
            this.route = route;
            this.swupdateservice = swupdateservice;
            this.overlayContainer = overlayContainer;
            this.analyticsService = analyticsService;
            this.loading = true;
            this.isLightTheme = false;
            this.componentCssClass = __runInitializers(this, _componentCssClass_initializers, void 0);
            this.selectedtheme = __runInitializers(this, _componentCssClass_extraInitializers);
            this.currentTheme = 'default-theme';
            this.currentSport = '';
            this.olympicOptions = [
                { id: 'tokyo2020', name: 'Tokyo 2020', logo: 'assets/images/olympics/tokyo2020_no_bg.png' },
                // { id: 'paris2024', name: 'Paris 2024', logo: 'assets/images/olympics/paris2024.png' },
                // { id: 'la2028', name: 'LA 2028', logo: 'assets/images/olympics/la2028.png' }
            ];
            this.selectedOlympics = this.olympicOptions[0].name;
            this.selectedOlympicsLogo = this.olympicOptions[0].logo;
            this.loadThemePreference();
            this.swupdateservice.checkForUpdates();
            this.router.events.subscribe((event) => {
                this.navigationInterceptor(event);
            });
            /** TO DO: V2.0 feature to supoport multiple olympics
            this.route.queryParams.subscribe(params => {
              this.selectedOlympics = params['olympics'] || 'la2028';
              this.updateSelectedOlympicsLogo();
            });
             */
        }
        ngOnInit() {
            // Track page views when routes change
            this.router.events.pipe((0, operators_1.filter)((event) => event instanceof router_1.NavigationEnd)).subscribe((event) => {
                this.analyticsService.pageView(event.urlAfterRedirects, document.title);
            });
        }
        navigationInterceptor(event) {
            if (event instanceof router_1.NavigationStart) {
                this.loading = true;
            }
            if (event instanceof router_1.NavigationEnd) {
                this.loading = false;
                const childRoute = this.route.firstChild;
                const sportname = childRoute === null || childRoute === void 0 ? void 0 : childRoute.snapshot.paramMap.get('sportname');
                this.currentSport = sportname || '';
            }
            if (event instanceof router_1.NavigationCancel) {
                this.loading = false;
            }
            if (event instanceof router_1.NavigationError) {
                this.loading = false;
            }
        }
        isActivePath() {
            const url = this.router.url;
            return url.startsWith('/sports/') || url === '/' || url === '/home';
        }
        loadThemePreference() {
            // Load theme from localStorage or default to light theme
            const savedTheme = localStorage.getItem('selectedTheme');
            this.currentTheme = savedTheme || 'default-theme';
            // Apply the theme
            if (this.componentCssClass) {
                this.overlayContainer.getContainerElement().classList.remove(this.componentCssClass);
            }
            this.overlayContainer.getContainerElement().classList.add(this.currentTheme);
            this.componentCssClass = this.currentTheme;
        }
        onSetTheme() {
            // Toggle theme
            this.currentTheme = this.currentTheme === "default-theme" ? "dark-theme" : "default-theme";
            localStorage.setItem('selectedTheme', this.currentTheme);
            // Apply theme
            if (this.componentCssClass) {
                this.overlayContainer.getContainerElement().classList.remove(this.componentCssClass);
            }
            this.overlayContainer.getContainerElement().classList.add(this.currentTheme);
            this.componentCssClass = this.currentTheme;
        }
        /* TO DO: V2.0 feature to supoport multiple olympics
        onOlympicsChange(event: MatSelectChange) {
          const selection = event.value;
          this.selectedOlympics = selection;
          this.updateSelectedOlympicsLogo();
          this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { olympics: selection },
            queryParamsHandling: 'merge'
          });
        }
          private updateSelectedOlympicsLogo(): void {
          const selected = this.olympicOptions.find(option => option.id === this.selectedOlympics);
          this.selectedOlympicsLogo = selected ? selected.logo : this.olympicOptions[0].logo;
        }
        */
        prepareRoute(outlet) {
            return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
        }
        navigateToAboutApp() {
            this.router.navigate(['/about']);
        }
        openAboutMe() {
            window.open('https://github.com/agrawalankush', '_blank');
        }
    };
    __setFunctionName(_classThis, "AppComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _componentCssClass_decorators = [(0, core_1.HostBinding)('class')];
        __esDecorate(null, null, _componentCssClass_decorators, { kind: "field", name: "componentCssClass", static: false, private: false, access: { has: obj => "componentCssClass" in obj, get: obj => obj.componentCssClass, set: (obj, value) => { obj.componentCssClass = value; } }, metadata: _metadata }, _componentCssClass_initializers, _componentCssClass_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppComponent = _classThis;
})();
exports.AppComponent = AppComponent;
