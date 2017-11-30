import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './star/star.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  }

  post = {
    title: "Title",
    isFavorite: true
  }

  tweet = {
    isLiked: false,
    likesCount: 0,
    body: "Here is the body of a tweet..."
  }

  courses = [1];

  cList;

  viewMode = 'map';

  canSave = true;

  changeViewMode(mode) {
    this.viewMode = mode;
  }

  onAdd() {
    this.cList.push( { id: 4, name: "Course 4"});
  }

  onRemove(course) {
    let idx = this.cList.indexOf(course);
    this.cList.splice(idx, 1);
  }

  onChange(course) {
    course.name = 'Updated';
  }

  loadCourses() {
    this.cList = [
      { id: 1, name: "Course 1" },
      { id: 2, name: "Course 2" },
      { id: 3, name: "Course 3" }
    ];
  }

  trackCourse(idx, course) {
    return course ? course.id : undefined;
    // Large list - performance problem.
  }

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed", eventArgs);
  }
}
