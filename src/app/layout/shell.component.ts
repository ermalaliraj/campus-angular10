import {Component, OnInit} from '@angular/core';
import {CommonService} from "../core/common.service";
import {LoggerService} from "../util/logger/logger.service";

@Component({
    selector: 'shell-component',
    templateUrl: './shell.html',
    providers:[LoggerService, CommonService]
})
export class ShellComponent implements OnInit {

    busyMessage = 'Please wait ...';
    isBusy = true;
    showSplash = true;

    constructor(private logger: LoggerService, private common: CommonService) { }

    ngOnInit() {
        this.activate();
    }

    activate() {
        // this.logger.success('CodeCamper loaded!', null, null);
//            TODO: Using a resolver on all routes or datacontext.ready in every controller
//            return datacontext.ready([]).then(hideSplash);
        this.hideSplash();
    }

    hideSplash() {
        setTimeout(() => {
            this.showSplash = false;
        }, 1000);

        //Force a 1 second delay so we can see the splash.
        // this.common.getTimeout()(function () {
        //     this.showSplash = false;
        // }, 1000);
    }
}
