import {Component} from '@angular/core';
import {RouteHelperService} from "../util/router/routehelper.service";

@Component({
    selector: 'sidebar-component',
    templateUrl: './sidebar.html'
})
export class SidebarComponent {

    constructor(private routehelper: RouteHelperService) {
    }

    routes = this.routehelper.getRoutes();
}
