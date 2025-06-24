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
exports.FeedbackComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let FeedbackComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-feedback',
            templateUrl: './feedback.component.html',
            styleUrls: ['./feedback.component.scss'],
            standalone: false
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var FeedbackComponent = _classThis = class {
        constructor(fb, sportsService, snackBar, router) {
            this.fb = fb;
            this.sportsService = sportsService;
            this.snackBar = snackBar;
            this.router = router;
            this.feedbackForm = this.fb.group({
                name: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(24)]],
                email: [''],
                preferredTheme: ['dark'], // Default value set to light
                feedback: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(500)]]
            });
        }
        onSubmit() {
            if (this.feedbackForm.valid) {
                this.sportsService.postfeedback(this.feedbackForm.value).subscribe({
                    next: () => {
                        this.snackBar.open('Thank You, You Beautiful Creature!!', 'Close', {
                            duration: 5000,
                            horizontalPosition: 'center',
                            verticalPosition: 'bottom',
                            panelClass: ['snackbar-success']
                        });
                        this.router.navigate(['/home']);
                    },
                    error: (err) => {
                        this.snackBar.open(err, 'Close', {
                            duration: 5000,
                            horizontalPosition: 'center',
                            verticalPosition: 'bottom',
                            panelClass: ['snackbar-error']
                        });
                    }
                });
            }
        }
    };
    __setFunctionName(_classThis, "FeedbackComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FeedbackComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FeedbackComponent = _classThis;
})();
exports.FeedbackComponent = FeedbackComponent;
