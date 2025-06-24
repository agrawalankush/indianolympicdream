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
exports.AboutComponent = void 0;
const core_1 = require("@angular/core");
const animations_1 = require("@angular/animations");
let AboutComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.scss'],
            standalone: false,
            animations: [
                (0, animations_1.trigger)('panelAnimation', [
                    (0, animations_1.state)('closed', (0, animations_1.style)({
                        height: '0',
                        minHeight: '0',
                        opacity: '0',
                        overflow: 'hidden'
                    })),
                    (0, animations_1.state)('open', (0, animations_1.style)({
                        height: '*',
                        opacity: '1',
                        overflow: 'hidden'
                    })),
                    (0, animations_1.transition)('closed => open', [
                        (0, animations_1.animate)('600ms cubic-bezier(0.17, 0.67, 0.43, 0.99)')
                    ]),
                    (0, animations_1.transition)('open => closed', [
                        (0, animations_1.animate)('600ms cubic-bezier(0.17, 0.67, 0.43, 0.99)')
                    ])
                ]),
                (0, animations_1.trigger)('contentAnimation', [
                    (0, animations_1.state)('visible', (0, animations_1.style)({
                        opacity: 1,
                        transform: 'translateY(0)'
                    })),
                    (0, animations_1.state)('void', (0, animations_1.style)({
                        opacity: 0,
                        transform: 'translateY(10px)'
                    })),
                    (0, animations_1.transition)('void => visible', [
                        (0, animations_1.animate)('450ms 150ms ease-out')
                    ])
                ])
            ]
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AboutComponent = _classThis = class {
        constructor(sanitizer, changeDetector) {
            this.sanitizer = sanitizer;
            this.changeDetector = changeDetector;
            // QA panels data
            this.appPanels = [
                {
                    question: 'What is IOD?',
                    description: 'IOD is a app that will help you follow India\'s Olympic journey throught the 4 years of an olympic cycle. It provides:',
                    features: [
                        'Real-time tracking of qualification statuses across all Olympic sports',
                        'Detailed calendar of upcoming qualification events and past results',
                        'Sport-specific qualification pathways and standards',
                        'Daily schedule during major competitions',
                        'Historical data of Indian performances at the Olympics',
                        'Curated collection of quality sports content recommendations',
                    ],
                    additionalInfo: 'The platform brings together scattered information from various sources including international federations, national sports bodies, and Olympic committees into one accessible hub for Indian sports fans.',
                    conclusion: "Whether you're a dedicated sports enthusiast or just beginning to follow Indian Olympic sports, IOD is built to keep you informed and engaged throughout the Olympic cycle.",
                    expanded: false
                },
                {
                    question: 'Origin Story - 2019',
                    description: 'This app was born in 2019 out of my frustration with Indian Mainstream Media and their ignorance towards Olympic sports. Qualifying for the Olympics is bloody hard, especially for us indians as we are not the most genetically gifted tribe. Our media always fails to provide proper context to Olympic Games throughout the cycle; As Abhinav Bindra says "It\'s not every 4 years, it\'s everyday." Casual Indian sports fans and normal people who tune into to watch olympics don\'t get that you simply just don\'t get to play in the olympics; you need to navigate through complex qualification system to play in it! Our media\'s reporting on olympics has been absolutely shambolic!! To quote shakespeare, It\'s been like, \"A tale told by an idiot, full of sound and fury, signifying nothing\". Our top journalists:',
                    features: [
                        '[Prabhu Chawla Calling Olypic Sports Tamasha](https://www.youtube.com/watch?v=SbcJ1zULANk)',
                        '[Barkha Dutt getting goosebumps and tears!](https://x.com/BDUTT/status/1152880982959071232) on a year old video of Hima Das',
                        '[Rajdeep Sardesai\'s proud indian moment](https://x.com/sardesairajdeep/status/1153002470496489473) on the very same video',
                    ],
                    additionalInfo: 'It was so infuriating to watch these clowns pretending to know their shit about Olympics in front of massive TV audiences when they dont\'t have any idea about it but then I also belived If you\'re not part of the solution,you\'re part of the problem. So, I had to try build something that tries to solve this problem, I just had to. So, in June 2019 I started IOD Twitter account and simultaneously started to work on building IOD. For 3 months I put in weekends and hours after work everyday and finally in September 2019 the indianolympicdream[dot]com was born.',
                    conclusion: "I also hated the crap sports biopics that bollywood was making at that time (They are still at it) that\'s why I also added Shows I Love, Because I feel sports fans deserve better. In fact we deserse the best! so, find and go watch these increadile stories of passion, love, freedom, redemption, courage, and stories of hope.",
                    expanded: false
                }
            ];
            // Animation state tracking
            this.panelAnimating = {};
        }
        ngOnInit() {
            this.initializeAnimationStates();
            // Automatically expand first panel on init
            if (this.appPanels.length > 0) {
                this.appPanels[0].expanded = true;
            }
        }
        initializeAnimationStates() {
            this.appPanels.forEach((_, index) => {
                this.panelAnimating[`panel-${index}`] = false;
            });
        }
        // Get animation state for panel expansion
        getPanelState(panel) {
            return panel.expanded ? 'open' : 'closed';
        }
        // Get animation state for content
        getContentState() {
            return 'visible';
        }
        // Handle expand/collapse button click
        togglePanel(panel, index) {
            const panelKey = `panel-${index}`;
            if (this.panelAnimating[panelKey])
                return;
            this.panelAnimating[panelKey] = true;
            panel.expanded = !panel.expanded;
            this.changeDetector.detectChanges();
        }
        // Animation callback handler
        onAnimationDone(event, index) {
            const panelKey = `panel-${index}`;
            this.panelAnimating[panelKey] = false;
        }
        // Parse links in feature list items - enhanced to support custom link text
        parseLinks(text) {
            // Updated regex to match [link text](url) format
            const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
            // Replace markdown-style links with HTML links
            const result = text.replace(markdownLinkRegex, (match, linkText, url) => {
                return `<a href="${url}" target="_blank" rel="noopener">${linkText}</a>`;
            });
            // Also maintain backward compatibility with old format [url]
            const oldUrlRegex = /\[(https?:\/\/[^\]]+)\]/g;
            const finalResult = result.replace(oldUrlRegex, (match, url) => {
                return `<a href="${url}" target="_blank" rel="noopener">Link</a>`;
            });
            return this.sanitizer.bypassSecurityTrustHtml(finalResult);
        }
    };
    __setFunctionName(_classThis, "AboutComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AboutComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AboutComponent = _classThis;
})();
exports.AboutComponent = AboutComponent;
