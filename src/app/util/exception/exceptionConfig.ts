import {Injectable} from '@angular/core';

@Injectable()
export class ExceptionConfig {

    constructor(private $provide, private extendExceptionHandler) {}

    exceptionConfig() {
        this.$provide.decorator('$exceptionHandler', this.extendExceptionHandler);
    }
}