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
exports.ShowsComponent = void 0;
const core_1 = require("@angular/core");
let ShowsComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-shows',
            templateUrl: './shows.component.html',
            styleUrls: ['./shows.component.scss'],
            standalone: false
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ShowsComponent = _classThis = class {
        constructor(route, sportservice) {
            this.route = route;
            this.sportservice = sportservice;
            this.videoyoutube = 'https://www.youtube.com/embed/';
            this.videoParams = '?autoplay=1&mute=0&enablejsapi=1&rel=0';
            this.videoStates = {};
            this.pageSize = 100;
            this.pageSizeOptions = [15, 30, 50, 100];
        }
        ngOnInit() {
            this.sportservice.getshowsdata(0, this.pageSize)
                .subscribe((res) => {
                this.showsdata = res.shows;
                this.length = res.total;
                this.showsdata.forEach((show) => {
                    this.videoStates[show.youtube_id] = {
                        isPlaying: false,
                        isLoading: false, // Initialize loading state
                        thumbnailUrl: `https://img.youtube.com/vi/${show.youtube_id}/hqdefault.jpg?ngsw-bypass=true`
                    };
                });
            }, (error) => {
                this.errmsg = error.error;
            });
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.addEventListener('message', event => {
                    console.log('SW Message:', event.data);
                });
            }
        }
        playVideo(youtubeId) {
            if (!this.videoStates[youtubeId].isLoading) {
                this.videoStates[youtubeId].isLoading = true;
                this.videoStates[youtubeId].isPlaying = true;
            }
        }
        onVideoLoad(youtubeId) {
            this.videoStates[youtubeId].isLoading = false;
        }
        handlePageEvent(e) {
            const index = e.pageIndex * e.pageSize;
            const size = e.pageSize;
            this.sportservice.getshowsdata(index, size)
                .subscribe((res) => {
                this.showsdata = res.shows;
                this.length = res.total;
            }, (error) => {
                this.errmsg = error;
            });
        }
        handleImageError(youtubeId) {
            if (this.videoStates[youtubeId]) {
                console.log(`Image load error for YouTube ID: ${youtubeId}`);
            }
        }
    };
    __setFunctionName(_classThis, "ShowsComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ShowsComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ShowsComponent = _classThis;
})();
exports.ShowsComponent = ShowsComponent;
