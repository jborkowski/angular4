import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class FollowersService extends DataService {
  constructor(http: Http) {
    super('https://api.github.com/users/jborkowski/followers', http)
  }
}
