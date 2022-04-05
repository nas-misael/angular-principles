import { Component, OnInit } from "@angular/core";
import { Course } from "./courses";

@Component( {
    selector: 'app-course-list',
    templateUrl: 'courseList.component.html'
})

export class CourseListComponent implements OnInit{

    courses: Course[] = []

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99,
                code: 'XPS 871',
                duration: 120,
                rating: 4.8
            },
            {
                id: 2,
                name: 'Angular: HTPP',
                imageUrl: '/assets/images/http.png',
                price: 45,
                code: 'XPS 878',
                duration: 80,
                rating: 3
            }

        ]
    }

}