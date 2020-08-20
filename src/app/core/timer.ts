import {AfterViewInit, ViewChild} from "@angular/core";
import {TimerComponent} from "./timer.component";


export class CountdownViewChildParentComponent implements AfterViewInit {

    @ViewChild(TimerComponent)
    private timerComponent: TimerComponent;

    seconds() { return 0; }

    ngAfterViewInit() {
        // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
        // but wait a tick first to avoid one-time devMode
        // unidirectional-data-flow-violation error
        setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
    }

    start() { this.timerComponent.start(); }
    stop() { this.timerComponent.stop(); }
}