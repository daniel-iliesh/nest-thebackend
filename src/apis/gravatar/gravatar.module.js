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
exports.GravatarModule = void 0;
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var gravatar_service_1 = require("./gravatar.service");
var gravatar_controller_1 = require("./gravatar.controller");
var app_interface_1 = require("../../app.interface");
var axios_1 = require("axios");
var GravatarModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            providers: [
                {
                    provide: app_interface_1.CustomModule.GRAVATAR_INSTANCE,
                    useFactory: function (configService) {
                        var gravatarApiKey = configService.get('GRAVATAR_API_KEY');
                        if (!gravatarApiKey) {
                            throw new Error('GRAVATAR_API_KEY environment variable is not set.');
                        }
                        var instance = axios_1.default.create({
                            baseURL: 'https://api.gravatar.com/v3',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: "Bearer ".concat(gravatarApiKey),
                            },
                            timeout: 10000,
                        });
                        return instance;
                    },
                    inject: [config_1.ConfigService],
                },
                gravatar_service_1.GravatarService,
            ],
            exports: [gravatar_service_1.GravatarService],
            controllers: [gravatar_controller_1.GravatarController],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var GravatarModule = _classThis = /** @class */ (function () {
        function GravatarModule_1() {
        }
        return GravatarModule_1;
    }());
    __setFunctionName(_classThis, "GravatarModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GravatarModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GravatarModule = _classThis;
}();
exports.GravatarModule = GravatarModule;
