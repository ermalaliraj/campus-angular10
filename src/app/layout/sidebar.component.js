"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarComponent = void 0;
var core_1 = require("@angular/core");
var AppConst = require("../core/config");
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        // constructor(
        //     // private $location,
        //     //         private $route,
        //     //         private bsDialog,
        //     // AppConst.config,
        //     //         private routehelper
        //     ) {
        // }
        this.config = AppConst.config;
        this.keyCodes = this.config.keyCodes;
        // routes = this.routehelper.getRoutes();
        this.searchText = '';
        this.wip = [];
        this.wipChangedEvent = this.config.events.storage.wipChanged;
    }
    SidebarComponent.prototype.activate = function () {
        this.getNavRoutes();
        this.wip[0] = 5;
    };
    SidebarComponent.prototype.clearStorage = function () {
        // return this.bsDialog.deleteDialog('Delete local storage and work in progress')
        //     .then(confirmDelete).catch(cancelDelete);
        //
        // function confirmDelete() {
        //     //datacontext.zStorage.clear();
        // }
        //
        // function cancelDelete() {
        // }
    };
    SidebarComponent.prototype.getNavRoutes = function () {
        // this.navRoutes = this.routes.filter(function (r) {
        //     return r.settings && r.settings.nav;
        // }).sort(function (r1, r2) {
        //     return r1.settings.nav - r2.settings.nav;
        // });
    };
    SidebarComponent.prototype.isCurrent = function (route) {
        // if (!route.title || !this.$route.current || !this.$route.current.title) {
        //     return '';
        // }
        // var menuName = route.title;
        // return this.$route.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
    };
    SidebarComponent.prototype.search = function ($event) {
        if ($event.keyCode === this.keyCodes.esc) {
            this.searchText = '';
            return;
        }
        if ($event.type === 'click' || $event.keyCode === this.keyCodes.enter) {
            var route = '/topics/search/';
            // this.$location.path(route + this.searchText);
        }
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'sidebar-component',
            templateUrl: './sidebar.html'
        })
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
