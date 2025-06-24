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
exports.ServerErrorComponent = void 0;
const core_1 = require("@angular/core");
let ServerErrorComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-server-error',
            template: `
    <div class="wrapper">
<div class="box">
<h1>500</h1>
<p>Sorry, I Fucked Up Somewhere on the server, I'm probably fixing it, please  try again or visit after sometime.</p>
<p><a href="/">Try again!</a></p>
</div>
</div>
  `,
            styles: [
                `.wrapper {
      position: relative;
      max-width: 1298px;
      height: auto;
      margin: 2em auto 0 auto;
    }`,
                `.box {
      max-width: 70%;
      min-height: auto;
      margin: 0 auto;
      padding: 1em 1em;
      text-align: center;
      background: url("https://www.dropbox.com/s/xq0841cp3icnuqd/flame.png?raw=1") no-repeat top 10em center/128px 128px,
                  transparent url("https://www.dropbox.com/s/w7qqrcvhlx3pwnf/desktop-pc.png?raw=1") no-repeat top 13em center/128px 128px;
    }`,
                `h1, p:not(:last-of-type) { text-shadow: 0 0 6px #216f79; }

    h1 {
      margin: 0 0 1rem 0;
      font-size: 8em;
    }
    p {
      margin-bottom: 0.5em;
      font-size: 3em;
    }
    p:first-of-type { margin-top: 4em; }
    p > a {
      border-bottom: 1px dashed #216f79;
      font-style: italic;
      text-decoration: none;
      color: #216f79;
    }
    p > a:hover { text-shadow: 0 0 6px #216f79; }
    p img { vertical-align: bottom; }`
            ],
            standalone: false
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ServerErrorComponent = _classThis = class {
        constructor() { }
        ngOnInit() {
        }
    };
    __setFunctionName(_classThis, "ServerErrorComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ServerErrorComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ServerErrorComponent = _classThis;
})();
exports.ServerErrorComponent = ServerErrorComponent;
