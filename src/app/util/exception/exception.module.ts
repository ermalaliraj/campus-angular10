import {NgModule} from '@angular/core';
import {LoggerModule} from "../logger/logger.module";
import {ExceptionConfig} from "./exceptionConfig";

@NgModule({
    imports: [
        LoggerModule
    ],
    declarations: [],
    providers: [
        ExceptionConfig
    ]
})
export class ExceptionModule {
}
