import {Component, Injectable, Injector} from '@angular/core';
import {ToasterService, BodyOutputType, Toast, ToasterConfig} from "angular2-toaster";

@Injectable()
export class LoggerService {

    public config1 : ToasterConfig = new ToasterConfig({
        positionClass: 'toast-top-right'
    });

    constructor(private toasterService: ToasterService, private injector: Injector) {}

    handleError(error) {
        // const toasterService = this.injector.get(ToasterService);
        let toast: Toast = {
            type: 'error', data: 1,
            onHideCallback: (toast) => console.log(toast.data) };
        this.toasterService.pop(toast);
        console.log('GLOBAL', error);
    }

    error(message, data, title) {
        this.toasterService.pop("error", title, message)
            .bodyOutputType = BodyOutputType.TrustedHtml;
        console.error('Error: ' + message, data);
    }

    info(message, data, title) {
        this.toasterService.pop("info", title, message)
            .bodyOutputType = BodyOutputType.TrustedHtml;
        console.info('Info: ' + message, data);
    }

    success(message, data, title) {
        this.handleError(message);
        // this.toasterService.pop("info", title, message)
        //     .bodyOutputType = BodyOutputType.TrustedHtml;
        // console.info('Success: ' + message, data);
    }

    warning(message, data, title) {
        this.toasterService.pop("warn", title, message)
            .bodyOutputType = BodyOutputType.TrustedHtml;
        console.warn('Warning: ' + message, data);
    }
}