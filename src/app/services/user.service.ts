import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OauthConstants} from '../common/oauth.constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(OauthConstants.USER_API + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(OauthConstants.USER_API + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(OauthConstants.USER_API + 'mod', { responseType: 'text' });
  }

  getCurrentUser(): Observable<any> {
    return this.http.get(OauthConstants.USER_API + 'me', httpOptions);
  }

  setUserAccountConnector(accountDto): Observable<any>{
    return this.http.post(OauthConstants.USER_API + 'mod/stripe' , accountDto, httpOptions);
  }
}
