import {Component} from '@angular/core';
import * as AppConst from "../core/config";

@Component({
    selector: 'sidebar-component',
    templateUrl: './sidebar.html'
})
export class SidebarComponent {
    // constructor(
    //     // private $location,
    //     //         private $route,
    //     //         private bsDialog,
    //     // AppConst.config,
    //     //         private routehelper
    //     ) {
    // }

    config = AppConst.config;

    keyCodes = this.config.keyCodes;

    // routes = this.routehelper.getRoutes();
    searchText = '';
    wip = [];
    wipChangedEvent = this.config.events.storage.wipChanged;
    navRoutes;

    activate();

    activate() {
        this.getNavRoutes();
        this.wip[0] = 5;
    }

    clearStorage() {
        // return this.bsDialog.deleteDialog('Delete local storage and work in progress')
        //     .then(confirmDelete).catch(cancelDelete);
        //
        // function confirmDelete() {
        //     //datacontext.zStorage.clear();
        // }
        //
        // function cancelDelete() {
        // }
    }

    getNavRoutes() {
        // this.navRoutes = this.routes.filter(function (r) {
        //     return r.settings && r.settings.nav;
        // }).sort(function (r1, r2) {
        //     return r1.settings.nav - r2.settings.nav;
        // });
    }

    isCurrent(route) {
        // if (!route.title || !this.$route.current || !this.$route.current.title) {
        //     return '';
        // }
        // var menuName = route.title;
        // return this.$route.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
    }

    search($event) {
        if ($event.keyCode === this.keyCodes.esc) {
            this.searchText = '';
            return;
        }
        if ($event.type === 'click' || $event.keyCode === this.keyCodes.enter) {
            var route = '/topics/search/';
            // this.$location.path(route + this.searchText);
        }
    }
}
