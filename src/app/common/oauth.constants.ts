import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

export class OauthConstants {
  private static API_BASE_URL = environment.apiBaseUrl;
  private static OAUTH2_URL = OauthConstants.API_BASE_URL + 'oauth2/authorization/';
  private static REDIRECT_URL = environment.clientUrl;
  public static API_URL = OauthConstants.API_BASE_URL + 'api/';
  public static AUTH_API = OauthConstants.API_URL + 'auth/';
  public static USER_API = OauthConstants.API_URL + 'users/';
  public static PAYMENT_API = OauthConstants.API_URL + 'payment/';
  public static GOOGLE_AUTH_URL = OauthConstants.OAUTH2_URL + 'google' + OauthConstants.REDIRECT_URL;
  public static httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}
