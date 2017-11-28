import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {
  private _authors = ["author1", "author2", "author3"];

  get authors() {
    return this._authors;
  }

}
