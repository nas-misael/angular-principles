import { Component, OnInit } from "@angular/core";
import { CourseService } from "./course.service";
import { Course } from "./courses";

@Component( {
    templateUrl: './courseList.component.html'
})

export class CourseListComponent implements OnInit{

    _courses: Course[] = []
    _filteredCourses: Course[] = []
    _filterBy!: string;

    constructor(private courseService: CourseService) {

    }

    ngOnInit(): void {
        this._courses = this.courseService.retrieveAll()
        this._filteredCourses = this._courses
    }

    set filter(value: string){
        this._filterBy = value
        this._filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
    }

    get filter(){
        return this._filterBy
    }

}