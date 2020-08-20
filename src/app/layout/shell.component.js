"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellComponent = void 0;
var core_1 = require("@angular/core");
var common_service_1 = require("../core/common.service");
var logger_service_1 = require("../util/logger/logger.service");
var ShellComponent = /** @class */ (function () {
    function ShellComponent(logger, common) {
        this.logger = logger;
        this.common = common;
        this.busyMessage = 'Please wait ...';
        this.isBusy = true;
        this.showSplash = true;
    }
    ShellComponent.prototype.ngOnInit = function () {
        this.activate();
    };
    ShellComponent.prototype.activate = function () {
        console.info("activeee");
        // this.logger.success('CodeCamper loaded!', null, null);
        //            TODO: Using a resolver on all routes or datacontext.ready in every controller
        //            return datacontext.ready([]).then(hideSplash);
        this.hideSplash();
    };
    ShellComponent.prototype.hideSplash = function () {
        var _this = this;
        setTimeout(function () {
            _this.showSplash = false;
        }, 1000);
        //Force a 1 second delay so we can see the splash.
        // this.common.getTimeout()(function () {
        //     this.showSplash = false;
        // }, 1000);
    };
    ShellComponent = __decorate([
        core_1.Component({
            selector: 'shell-component',
            templateUrl: './shell.html',
            providers: [logger_service_1.LoggerService, common_service_1.CommonService]
        })
    ], ShellComponent);
    return ShellComponent;
}());
exports.ShellComponent = ShellComponent;
