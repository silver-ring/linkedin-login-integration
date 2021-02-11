import {Injectable} from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {analyzeAndValidateNgModules} from '@angular/compiler';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  linkedInToken = '';
  accesstoken: any;

  httpOptions = {
    // not working refused to set unsafe
    headers: new HttpHeaders({
      // 'Content-Type': 'application/json', //removing the header option as without it also this works tested via postman
      // 'Access-Control-Request-Headers': 'Origin, Content-Type, X-Auth-Token, content-type', //main.7c2d8c1bc547b29396b0.js:1 Refused to set unsafe header "Access-Control-Request-Headers"
      'Access-Control-Request-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      Origin: '*', // Refused to set unsafe header "Origin"
      // 'Accept':'text/html, application/xhtml+xml, application/xml;q=0.9, */  /**;q=0.8',
    }),
  };
  paramsOptions = {
    header: new XMLHttpRequest(),
  };

  linkedInCredentials = {
    clientId: environment.linkedIn.clientId,
    clientsecret: environment.linkedIn.clientSecret,
    redirectUrl: environment.linkedIn.redirectUrl,
  };

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  codeInResponse(linkedintoken) {
    this.linkedInToken = this.route.snapshot.queryParams.code;
    return this.linkedInToken;
  }

  exchangeAuthCode(accesstoken) {
    const url = `https://www.linkedin.com/oauth/v2/accessToken?&grant_type=authorization_code&code=${this.linkedInToken}&redirect_uri=${this.linkedInCredentials.redirectUrl}&client_id=${this.linkedInCredentials.clientId}&client_secret=${this.linkedInCredentials.clientsecret}`;
    return this.http.get<any>(
      url,
      this.httpOptions
    );
  }


}
