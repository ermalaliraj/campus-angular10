import {Component, Input, OnInit} from '@angular/core';
import {Student} from "./student";
import {config} from "../core/config";

@Component({
    selector: 'student-row',
    templateUrl: './student-row.component.html'
})
export class StudentRowComponent implements OnInit{
    @Input() student: Student;
    imgPath: String;

    constructor(){}
    ngOnInit(): void {
        let basePath = config.imageSettings.imageBasePath;
        let unknownImage = config.imageSettings.unknownPersonImageSource;

        this.imgPath = basePath + (this.student.imageSource || unknownImage);
    }
}
