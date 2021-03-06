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
import {LoggerService} from "./util/logger/logger.service";
import {DashboardComponent} from "./dashboard/dashboard.component";

import {DashboardModule} from "./dashboard/dashboard.module";

@NgModule({
    imports: [
        BrowserModule,
        RoutingModule,
        CoreModule
        , LayoutModule
        , DashboardModule
        , ToasterModule
        , BrowserAnimationsModule//if you use toasterService in AppComponent
    ],
    declarations: [ShellComponent
        , TopNavComponent
        , SidebarComponent
        , DashboardComponent
        , AppComponent],
    providers: [LoggerService, ToasterService],
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
