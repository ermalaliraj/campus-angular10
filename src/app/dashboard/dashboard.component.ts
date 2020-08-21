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

    coursesCount = 0;
    topicsCount = 0;
    studentsCount = 0;

    activate() {
        this.setBasicData();
        this.getStudentsCount(),
        this.getTopicsCount(),
        this.getTopics(),
        this.getCoursesCount()
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
        this.studentsCount = 7;
    }
    getTopicsCount() {
        this.topicsCount = 4;
    }
    getCoursesCount() {
        this.coursesCount = 3;
    }
    getTopics() {
        return {};
    }
}
