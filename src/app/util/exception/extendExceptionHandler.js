"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendExceptionHandler = void 0;
var core_1 = require("@angular/core");
var extendExceptionHandler = /** @class */ (function () {
    function extendExceptionHandler($delegate, exceptionConfig, logger) {
        this.$delegate = $delegate;
        this.exceptionConfig = exceptionConfig;
        this.logger = logger;
    }
    // Extend the $exceptionHandler service to also display a toast.
    extendExceptionHandler.prototype.extendExceptionHandler = function () {
        var appErrorPrefix = this.exceptionConfig.config.appErrorPrefix || '';
        return function (exception, cause) {
            this.$delegate(exception, cause);
            var errorData = { exception: exception, cause: cause };
            var msg = appErrorPrefix + exception.message;
            /**
             * Could add the error to a service's collection,
             * add errors to $rootScope, log errors to remote web server,
             * or log locally. Or throw hard. It is entirely up to you.
             * throw exception;
             *
             * @example
             *     throw { message: 'error message we added' };
             *
             */
            this.logger.error(msg, errorData);
        };
    };
    extendExceptionHandler = __decorate([
        core_1.Injectable()
    ], extendExceptionHandler);
    return extendExceptionHandler;
}());
exports.extendExceptionHandler = extendExceptionHandler;
