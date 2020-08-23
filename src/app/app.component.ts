import {Component} from '@angular/core';
import {BodyOutputType, ToasterConfig, ToasterService} from "angular2-toaster";
import {Title} from "@angular/platform-browser";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {

    constructor(private toasterService: ToasterService, private titleService: Title) {
        this.toasterService = toasterService;
    }

    public config1 : ToasterConfig = new ToasterConfig({
        positionClass: 'toast-top-center',
        limit: 7,
        timeout: 200
    });

    ngAfterViewInit() {
        console.info("AppComponent.ngAfterViewInit");
        let toast = this.toasterService.pop('success', 'Args Title', 'Args sfgsdgsd rgrdg rerth rthr yhrtBody');
        toast.bodyOutputType = BodyOutputType.TrustedHtml;
        toast.title = "Actual tite";
        toast.body = "new html body <i>italic</i><hr/>notes";
        toast.type = "error";
        toast.timeout = 20;

        this.titleService.setTitle( 'campus-angular10' );
    }
}
