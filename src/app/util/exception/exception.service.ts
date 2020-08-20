import {Injectable} from '@angular/core';
import {ToasterService, BodyOutputType} from "angular2-toaster";
import {LoggerService} from "../logger/logger.service";

@Injectable()
export class ExceptionService {

    constructor(private loggerService: LoggerService) {}

     catcher(message) {
         this.loggerService.error(message, "blabla", "title2222");
        // return function (reason) {
        //     this.loggerService.error(message, reason);
        // };
    }
}