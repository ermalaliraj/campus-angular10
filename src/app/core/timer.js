"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountdownViewChildParentComponent = void 0;
var core_1 = require("@angular/core");
var timer_component_1 = require("./timer.component");
var CountdownViewChildParentComponent = /** @class */ (function () {
    function CountdownViewChildParentComponent() {
    }
    CountdownViewChildParentComponent.prototype.seconds = function () { return 0; };
    CountdownViewChildParentComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
        // but wait a tick first to avoid one-time devMode
        // unidirectional-data-flow-violation error
        setTimeout(function () { return _this.seconds = function () { return _this.timerComponent.seconds; }; }, 0);
    };
    CountdownViewChildParentComponent.prototype.start = function () { this.timerComponent.start(); };
    CountdownViewChildParentComponent.prototype.stop = function () { this.timerComponent.stop(); };
    __decorate([
        core_1.ViewChild(timer_component_1.TimerComponent)
    ], CountdownViewChildParentComponent.prototype, "timerComponent", void 0);
    return CountdownViewChildParentComponent;
}());
exports.CountdownViewChildParentComponent = CountdownViewChildParentComponent;
