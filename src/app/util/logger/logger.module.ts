import {NgModule} from '@angular/core';
import {ToasterModule, ToasterService} from "angular2-toaster";
import {LoggerService} from "./logger.service";

@NgModule({
    imports: [
        ToasterModule
    ],
    declarations: [
    ],
    providers: [ToasterService, LoggerService]
})

export class LoggerModule {
}
