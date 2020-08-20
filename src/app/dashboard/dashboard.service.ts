import {Injectable} from "@angular/core";
import {CommonService} from "../core/common.service";

@Injectable()
export class DashboardService {

    constructor(private common: CommonService) {
    }

    // $q = common.$q;

    students = {};
    topics = {};
    courses = {};
    news = {};

    activate();

    activate() {
        this.setBasicData();
        var promises = [
            this.getStudentsCount(),
            this.getTopicCount(),
            this.getTopics(),
            this.getTrackCounts()
        ];
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
        return 4;
    }
    getTopicCount() {
        return 1;
    }
    getTrackCounts() {
        return 5;
    }
    getTopics() {
        return {};
    }
}