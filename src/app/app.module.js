"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var xyz_component_1 = require("./xyz/xyz.component");
var core_module_1 = require("./core/core.module");
var app_component_1 = require("./app.component");
var layout_module_1 = require("./layout/layout.module");
var sidebar_component_1 = require("./layout/sidebar.component");
var shell_component_1 = require("./layout/shell.component");
var topnav_component_1 = require("./layout/topnav.component");
var angular2_toaster_1 = require("angular2-toaster");
var logger_service_1 = require("./util/logger/logger.service");
var animations_1 = require("@angular/platform-browser/animations");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                ng_bootstrap_1.NgbModule,
                platform_browser_1.BrowserModule,
                core_module_1.CoreModule,
                layout_module_1.LayoutModule,
                angular2_toaster_1.ToasterModule,
                animations_1.BrowserAnimationsModule //if you use toasterService in AppComponent
            ],
            declarations: [xyz_component_1.XyzComponent,
                shell_component_1.ShellComponent,
                topnav_component_1.TopNavComponent,
                sidebar_component_1.SidebarComponent,
                app_component_1.AppComponent],
            providers: [logger_service_1.LoggerService, angular2_toaster_1.ToasterService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
