"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var angular2_toaster_1 = require("angular2-toaster");
var AppComponent = /** @class */ (function () {
    function AppComponent(toasterService) {
        this.toasterService = toasterService;
        this.title = 'campus-angular10';
        this.config1 = new angular2_toaster_1.ToasterConfig({
            positionClass: 'toast-top-center',
            limit: 7,
            timeout: 200
        });
        this.toasterService = toasterService;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        console.info("AppComponent.ngAfterViewInit");
        var toast = this.toasterService.pop('success', 'Args Title', 'Args sfgsdgsd rgrdg rerth rthr yhrtBody');
        toast.bodyOutputType = angular2_toaster_1.BodyOutputType.TrustedHtml;
        toast.title = "Actual tite";
        toast.body = "new html body <i>italic</i><hr/>notes";
        toast.type = "error";
        toast.timeout = 20;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
