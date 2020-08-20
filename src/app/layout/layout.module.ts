import {NgModule} from '@angular/core';
import {CommonService} from "../core/common.service";
import {LoggerService} from "../util/logger/logger.service";

@NgModule({
    imports: [],
    // declarations: [ShellComponent, SidebarComponent, TopNavComponent],
    providers: [LoggerService, CommonService]
})

export class LayoutModule {
}
