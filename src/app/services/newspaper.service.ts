import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx';
import { SessionService } from './session.service';
import { NewsApi } from './newsApi.service';

@Injectable()
export class NewspaperService {
  BASE_URL: string = 'http://localhost:3000';

  constructor(
    private http: Http,
    private session: SessionService,
    private newsApi: NewsApi

  ) {}

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  // Get full list of newspapers
  getNewspapers() {
    return this.http.get(`${this.BASE_URL}/api/newspapers`, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }

  getFavoriteArticles() {
    return this.http.get(`${this.BASE_URL}/api/favorites-articles`, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }
  // Get list of the newspapers you are suscribed to
  getSuscribedNewspaper(){
    return this.http.get(`${this.BASE_URL}/api/suscribed-newspapers`, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }

  suscribe(id){
    return this.http.get(`${this.BASE_URL}/api/suscribe/${id}`, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }

  getNewspaper(id) {
    return this.http.get(`${this.BASE_URL}/api/newspaper/${id}`, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }

  unsuscribe(id) {
    return this.http.delete(`${this.BASE_URL}/api/unsuscribe/${id}`, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }

  saveArticle(myNew){
    console.log(myNew);
    return this.http.post(`${this.BASE_URL}/api/save`, myNew,this.requestOptions())
      .map(res => res)
      .catch(this.handleError);
  }
  removeArticle(myNew,id){
    return this.http.delete(`${this.BASE_URL}/api/delete-article/${id}`,this.requestOptions())
      .map(res => res)
      .catch(this.handleError);
  }

  private requestOptions(): RequestOptions {
    let headers = new Headers({ 'Authorization': `JWT ${this.session.token}` });
    return new RequestOptions({ headers: headers });
  }
}
