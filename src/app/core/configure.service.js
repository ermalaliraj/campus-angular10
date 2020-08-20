"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigureService = void 0;
var core_1 = require("@angular/core");
var ConfigureService = /** @class */ (function () {
    function ConfigureService($logProvider, $routeProvider, exceptionConfigProvider, routehelperConfigProvider, toastr, config) {
        this.$logProvider = $logProvider;
        this.$routeProvider = $routeProvider;
        this.exceptionConfigProvider = exceptionConfigProvider;
        this.routehelperConfigProvider = routehelperConfigProvider;
        this.toastr = toastr;
        this.config = config;
    }
    // configureTastr();
    //
    // configureLogging();
    //
    // configureExceptions();
    //
    // configureRouting();
    ConfigureService.prototype.configureToastr = function () {
        this.toastr.options.timeOut = 4000;
        this.toastr.options.positionClass = 'toast-bottom-right';
    };
    ConfigureService.prototype.configureLogging = function () {
        // turn debugging off/on (no info or warn)
        if (this.$logProvider.debugEnabled) {
            this.$logProvider.debugEnabled(true);
        }
    };
    ConfigureService.prototype.configureExceptions = function () {
        this.exceptionConfigProvider.config.appErrorPrefix = this.config.appErrorPrefix;
    };
    ConfigureService.prototype.configureRouting = function () {
        var routeCfg = this.routehelperConfigProvider;
        routeCfg.config.$routeProvider = this.$routeProvider;
        routeCfg.config.docTitle = 'Campus -';
        routeCfg.config.resolveAlways = {
            /* @ngInject */
            ready: function () {
                ;
            }
            //                ready: ['datacontext', function (datacontext) {
            //                    return datacontext.ready();
            //                }]
        };
    };
    ConfigureService = __decorate([
        core_1.Injectable()
    ], ConfigureService);
    return ConfigureService;
}());
exports.ConfigureService = ConfigureService;
