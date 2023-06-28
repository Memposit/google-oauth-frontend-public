import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {OauthConstants} from '../common/oauth.constants';
import {HttpClient} from '@angular/common/http';
import {Services} from '../services-page/services';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(request): Observable<any> {
    const params = request;
    return this.httpClient.get(OauthConstants.API_URL + 'services', {params});
  }

  create(services: any): Observable<any> {
    return this.httpClient.post(OauthConstants.API_URL + 'services', JSON.stringify(services), OauthConstants.httpOptions);
  }

  find(id: number): Observable<any> {
    return this.httpClient.get<Services>(OauthConstants.API_URL + 'services/' + id);
  }

  update(id: number, services: Services): Observable<any> {
    return this.httpClient.put(OauthConstants.API_URL + 'services/' + id, JSON.stringify(services), OauthConstants.httpOptions);
  }

  delete(id: number) {
    return this.httpClient.delete(OauthConstants.API_URL + 'services/' + id);
  }
}
