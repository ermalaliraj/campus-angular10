import {Injectable} from "@angular/core";
import {LoggerService} from "../util/logger/logger.service";
import {Student} from "./student";

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    constructor(private logger: LoggerService) {
    }

    STUDENTS : Student[] = [
        {"id": "1", "firstName": "Ermal", "lastName": "Aliraj", "faculty": "Computer Science", "imageSource": "avatar1.jpg"},
        {"id": "2", "firstName": "Paolo", "lastName": "Rossi", "faculty": "Computer Science", "imageSource": "cat.jpg"},
        {"id": "3", "firstName": "Andrea", "lastName": "Cadorna", "faculty": "Engineering", "imageSource": "hat.jpg"},
        {"id": "4", "firstName": "Bogdan", "lastName": "Mvladinescu", "faculty": "IT Consultancy", "imageSource": ""},
        {"id": "5", "firstName": "Sorin", "lastName": "Zorincaenu", "faculty": "Freelancer", "imageSource": ""},
        {"id": "6", "firstName": "Jeroen", "lastName": "", "faculty": "IT teaching", "imageSource": ""},
        {"id": "7", "firstName": "Salih", "lastName": "", "faculty": "Team Leader", "imageSource": ""}
    ];

    getStudentsCount() {
        return this.STUDENTS.length;
    }

    getStudents() {
        return this.STUDENTS;
    }
}