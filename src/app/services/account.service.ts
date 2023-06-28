import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OauthConstants} from '../common/oauth.constants';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {
  }

  createStripeAccount(user): Observable<any> {
    return this.http.post(OauthConstants.PAYMENT_API + 'account', {user}, OauthConstants.httpOptions);
  }
}
