import {Component} from '@angular/core';
import {Location} from "@angular/common";
import {DashboardService} from "./dashboard.service";

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.html'
})
export class DashboardComponent {

    constructor(){
        // dashboardService.activate();
        this.activate();
    }

    students = {};
    topics = {};
    courses = {};
    news = {};

    courseCount = 0;
    topicCount = 0;
    studentsCount = 0;
    trackCounts = 0;

    activate() {
        this.setBasicData();
        this.getStudentsCount(),
        this.getTopicCount(),
        this.getTopics(),
        this.getTrackCounts()
    }

    setBasicData() {
        this.students = {
            title: 'Top students'
        };
        this.topics = {
            interval: 5000,
            list: [],
            title: 'Most ranked topics'
        };
        this.courses = {
            predicate: '',
            reverse: false,
            setSort: this.setCoursesSort,
            title: 'Most followed courses',
            tracks: []
        };
        this.news = {
            title: 'Campus Angular JS',
            description: 'Campus Angular JS ' +
            'is a demo project '
        };
    }

    setCoursesSort(prop) {
        // this.courses.predicate = prop;
        // this.courses.reverse = !vm.courses.reverse;
    }

    getStudentsCount() {
        this.studentsCount = 4;
    }
    getTopicCount() {
        this.topicCount = 1;
    }
    getTrackCounts() {
        this.trackCounts = 5;
    }
    getTopics() {
        return {};
    }
}
