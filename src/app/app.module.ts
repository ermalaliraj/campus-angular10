import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CoreModule} from "./core/core.module";
import {AppComponent} from "./app.component";
import {LayoutModule} from "./layout/layout.module";
import {SidebarComponent} from "./layout/sidebar.component";
import {ShellComponent} from "./layout/shell.component";
import {TopNavComponent} from "./layout/topnav.component";
import {ToasterModule, ToasterService} from "angular2-toaster";
import {LoggerService} from "./util/logger/logger.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        // NgbModule,
        BrowserModule,
        CoreModule
        , LayoutModule
        , ToasterModule
        , BrowserAnimationsModule//if you use toasterService in AppComponent
    ],
    declarations: [ShellComponent
        , TopNavComponent
        , SidebarComponent
        , AppComponent],
    providers: [LoggerService, ToasterService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
