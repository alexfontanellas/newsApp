import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx';
import { SessionService } from './session.service';

@Injectable()
export class NewsApi {
  BASE_URL: string = 'http://localhost:3000';

  constructor(
    private http: Http,
    private session: SessionService
  ) {}

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  // Get full list of newspapers
  getArticles(link) {
    return this.http.get(`${link}`)
      .map((res) => res.json())
      .catch(this.handleError);
  }

}
