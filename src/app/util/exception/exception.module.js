"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionModule = void 0;
var core_1 = require("@angular/core");
var logger_module_1 = require("../logger/logger.module");
var exceptionConfig_1 = require("./exceptionConfig");
var ExceptionModule = /** @class */ (function () {
    function ExceptionModule() {
    }
    ExceptionModule = __decorate([
        core_1.NgModule({
            imports: [
                logger_module_1.LoggerModule
            ],
            declarations: [],
            providers: [
                exceptionConfig_1.ExceptionConfig
            ]
        })
    ], ExceptionModule);
    return ExceptionModule;
}());
exports.ExceptionModule = ExceptionModule;
