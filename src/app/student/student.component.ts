import {Component, OnInit} from "@angular/core";
import {Student} from "./student";
import {StudentService} from "./student.service";
import {CommonService} from "../core/common.service";

export class Paging {

    constructor(public currentPage: number, public maxPagesToShow: number, public pageSize: number) {
        this.currentPage = currentPage;
        this.maxPagesToShow = maxPagesToShow;
        this.pageSize = pageSize;
    }

    public setStudentCount(studentsCount) {
        this.studentsCount = studentsCount;
    }
    public setCurrentPage(newPageNr) {
        this.currentPage = newPageNr;
    }

    get getStudentCount() {
        return this.studentsCount;
    }

    studentsCount: number;

    get pageCount() {
        var val = 1;
        if (this.studentsCount % this.pageSize == 0) {
            val = 0;
        }
        return Math.floor(this.studentsCount / this.pageSize) + val;
    }
}

@Component({
    selector: 'students-component',
    templateUrl: './student.html'
})
export class StudentComponent implements OnInit {

    students: Student[];
    paging = new Paging(1, 5, 3);
    title = 'Students';

    constructor(private studentService: StudentService, private commonService: CommonService) {
    }

    ngOnInit(): void {
        this.getStudents();
    }

    getStudents() {
        this.students = this.studentService.getStudents();
        this.paging.setStudentCount(this.studentService.getStudentsCount())
        console.log(this.students);
    }

    getStudentsCount() {
        return this.paging.getStudentCount;
    }

    pageChanged(newPage){
        this.paging.setCurrentPage(newPage);
    }
}
