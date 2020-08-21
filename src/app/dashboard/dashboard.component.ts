import {Component, OnInit} from '@angular/core';
import {Cluster, DashboardService} from "./dashboard.service";

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {

    clusters: Cluster[];

    constructor(private dashboardService: DashboardService) {}

    ngOnInit(): void {
        this.clusters = this.dashboardService.getClusters();
    }

    get getStudentsCount() {
        return "7";
    }

    get getTopicsCount() {
        return 4;
    }

    get getCoursesCount() {
        return 3;
    }

    get news() {
        return {
            title: 'Campus Angular JS',
            description: 'Campus Angular JS is a demo project'
        };
    }
}
