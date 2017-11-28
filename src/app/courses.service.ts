
export class CoursesService {
    private _courses = ["course1", "course2", "course3"];

    get getCourses() {
        return this._courses;
    }
}