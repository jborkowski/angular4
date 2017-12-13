import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProfileService extends DataService {
  constructor(http: Http) {
    super('https://api.github.com/users', http);
  }
}
