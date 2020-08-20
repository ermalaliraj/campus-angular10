"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
var core_1 = require("@angular/core");
var angular2_toaster_1 = require("angular2-toaster");
var LoggerService = /** @class */ (function () {
    function LoggerService(toasterService, injector) {
        this.toasterService = toasterService;
        this.injector = injector;
        this.config1 = new angular2_toaster_1.ToasterConfig({
            positionClass: 'toast-top-right'
        });
    }
    LoggerService.prototype.handleError = function (error) {
        // const toasterService = this.injector.get(ToasterService);
        var toast = {
            type: 'error', data: 1,
            onHideCallback: function (toast) { return console.log(toast.data); }
        };
        this.toasterService.pop(toast);
        console.log('GLOBAL', error);
    };
    LoggerService.prototype.error = function (message, data, title) {
        this.toasterService.pop("error", title, message)
            .bodyOutputType = angular2_toaster_1.BodyOutputType.TrustedHtml;
        console.error('Error: ' + message, data);
    };
    LoggerService.prototype.info = function (message, data, title) {
        this.toasterService.pop("info", title, message)
            .bodyOutputType = angular2_toaster_1.BodyOutputType.TrustedHtml;
        console.info('Info: ' + message, data);
    };
    LoggerService.prototype.success = function (message, data, title) {
        this.handleError(message);
        // this.toasterService.pop("info", title, message)
        //     .bodyOutputType = BodyOutputType.TrustedHtml;
        // console.info('Success: ' + message, data);
    };
    LoggerService.prototype.warning = function (message, data, title) {
        this.toasterService.pop("warn", title, message)
            .bodyOutputType = angular2_toaster_1.BodyOutputType.TrustedHtml;
        console.warn('Warning: ' + message, data);
    };
    LoggerService = __decorate([
        core_1.Injectable()
    ], LoggerService);
    return LoggerService;
}());
exports.LoggerService = LoggerService;
