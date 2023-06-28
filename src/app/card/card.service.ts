import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OauthConstants} from '../common/oauth.constants';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private headers = new HttpHeaders();

  constructor(private httpClient: HttpClient) {
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  public createCharge(cardToken, customerId, price, currency, description, serviceId) {
    const chargeDto = {
      token: cardToken.id,
      price,
      customerId,
      description,
      currency,
      serviceId
    };
    return this.httpClient.post(OauthConstants.PAYMENT_API + `charges`, chargeDto, {headers: this.headers});
  }

  public addCard(accountDto, cardToken) {
    const params = cardToken;
    return this.httpClient.post(OauthConstants.PAYMENT_API + `card`, accountDto, {headers: this.headers, params: {token: params.id}});
  }
}
