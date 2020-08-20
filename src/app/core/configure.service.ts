import {Injectable} from "@angular/core";

@Injectable()
export class ConfigureService {

    constructor(private $logProvider, private $routeProvider, private exceptionConfigProvider,
                private routehelperConfigProvider, private toastr, private config) {
    }

    // configureTastr();
    //
    // configureLogging();
    //
    // configureExceptions();
    //
    // configureRouting();

    configureToastr() {
        this.toastr.options.timeOut = 4000;
        this.toastr.options.positionClass = 'toast-bottom-right';
    }

    configureLogging() {
        // turn debugging off/on (no info or warn)
        if (this.$logProvider.debugEnabled) {
            this.$logProvider.debugEnabled(true);
        }
    }

    configureExceptions() {
        this.exceptionConfigProvider.config.appErrorPrefix = this.config.appErrorPrefix;
    }

    configureRouting() {
        var routeCfg = this.routehelperConfigProvider;
        routeCfg.config.$routeProvider = this.$routeProvider;
        routeCfg.config.docTitle = 'Campus -';
        routeCfg.config.resolveAlways = {
            /* @ngInject */
            ready: function () {
                ;
            }
            //                ready: ['datacontext', function (datacontext) {
            //                    return datacontext.ready();
            //                }]
        };
    }

}