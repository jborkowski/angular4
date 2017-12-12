import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'authors',
  template: `
  <h2>{{ "3 Authors"}}</h2>
  <h2 [textContent]="title"></h2> 
  <ul>
      <li *ngFor="let author of authors">
          {{ author }}
      </li> 
  </ul>
  `
})
export class AuthorsComponent implements OnInit {
  title = "Second Title"
  authors;

  constructor(service: AuthorsService) {
    this.authors = service.authors;
  }

  ngOnInit() {
  }

}
