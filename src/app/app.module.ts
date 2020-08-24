import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Router} from "@angular/router";
import {ToasterModule, ToasterService} from "angular2-toaster";

import {RoutingModule} from './util/router/routing.module';
import {CoreModule} from "./core/core.module";
import {AppComponent} from "./app.component";
import {LayoutModule} from "./layout/layout.module";
import {SidebarComponent} from "./layout/sidebar.component";
import {ShellComponent} from "./layout/shell.component";
import {TopNavComponent} from "./layout/topnav.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

import {DashboardModule} from "./dashboard/dashboard.module";
import {CommonService} from "./core/common.service";
import {StudentModule} from "./student/student.module";
import {StudentComponent} from "./student/student.component";
import {StudentRowComponent} from "./student/student-row.component";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
    imports: [
        BrowserModule,
        RoutingModule,
        CoreModule
        , LayoutModule
        , DashboardModule
        , StudentModule
        , ToasterModule
        , NgxPaginationModule
        , BrowserAnimationsModule//if you use toasterService in AppComponent
    ],
    declarations: [ShellComponent
        , TopNavComponent
        , SidebarComponent
        , DashboardComponent
        , StudentComponent
        , StudentRowComponent
        , AppComponent],
    providers: [CommonService],
    bootstrap: [AppComponent]
})
export class AppModule {

    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
        // Use a custom replacer to display function names in the route configs
        const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
        console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
    }
}
