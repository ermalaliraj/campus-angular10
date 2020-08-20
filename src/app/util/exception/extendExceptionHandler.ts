import {Injectable} from '@angular/core';
import {LoggerService} from "../logger/logger.service";

@Injectable()
export class extendExceptionHandler {

    constructor(private $delegate, private exceptionConfig, private logger: LoggerService) {

    }

    // Extend the $exceptionHandler service to also display a toast.
    extendExceptionHandler() {
        var appErrorPrefix = this.exceptionConfig.config.appErrorPrefix || '';
        return function(exception, cause) {
            this.$delegate(exception, cause);
            var errorData = {exception: exception, cause: cause};
            var msg = appErrorPrefix + exception.message;
            /**
             * Could add the error to a service's collection,
             * add errors to $rootScope, log errors to remote web server,
             * or log locally. Or throw hard. It is entirely up to you.
             * throw exception;
             *
             * @example
             *     throw { message: 'error message we added' };
             *
             */
            this.logger.error(msg, errorData);
        };
    }
}