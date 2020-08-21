import {NgModule} from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToasterService} from "angular2-toaster";
import {ExceptionModule} from '../util/exception/exception.module';
import {LoggerModule} from '../util/logger/logger.module';
// import {RoutingModule} from '../util/router/router.module';
import {toastrConfigArr, config} from "./config";
import {ConfigureService} from "./configure.service";
import {LoggerService} from "../util/logger/logger.service";

@NgModule({
    imports: [
        // NgbModule,
        // RoutingModule,
        ExceptionModule,
        LoggerModule
    ],
    declarations: [],
    providers: [
        // {provide: 'moment', useValue: moment} //useValue
        {provide: 'toastr', useClass: ToasterService},
        {provide: 'toastrConfigArr', useValue: toastrConfigArr},
        {provide: 'config', useValue: config},
        ConfigureService, LoggerService
    ]
})

export class CoreModule {
}
