import { Component } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', // <courses>, // if you modify DOM or adding removing elemnet * asterix before directive
    template: `
    <img [src]="imageUrl"/>
    <h2>{{ "Title: " +  title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li> 
    </ul>
    <table>
        <tr>
            <td [attr.colspan]="colSpan"></td>
        </tr>
    </table>
    <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
    <div (click)="onDivClicked()">
        <button (click)="onSave($event)">~Clicable</button>
    </div>

    <input #email2 (keyup.enter)="onKeyUp2(email2.value)" />
    <input [value]="email3" (keyup.enter)="onKeyUp3()" />

    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />

    <br/>

    {{ course.title | uppercase | lowercase }} <br/>
    {{ course.students | number }} <br/>
    {{ course.rating | number:'2.1-2' }} <br/>
    {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
    {{ course.releaseDate | date:'shortDate'}}
    

    <br/>

    {{ text | summary:'60' }}
    `
})
export class CoursesComponent {
    imageUrl = "http://lorempixel.com/400/400/";
    title = "List of courses";
    colSpan = 4;
    courses;
    email = "me@example.com";

    course = {
        title: "The `Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    isActive = true;

    constructor(service: CoursesService) {
        this.courses = service.getCourses;
    }

    onDivClicked() {
        console.log("Div was clicked.")
    }

    onKeyUp() {
        //if ($event.keyCode === 13) <- old way
        console.log(this.email);
    }

    onSave($event) {
        $event.stopPropagation();
        alert("onClick" + $event); // DOM Event object;
    }

}