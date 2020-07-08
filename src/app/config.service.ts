import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';



@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  linkedInToken = '';
  accessToken = '';

  httpOptions = {
    headers: new HttpHeaders({
      //'Content-Type': 'application/json', //removing the header option as without it also this works tested via postman
    }),
  };

  private linkedInCredentials = {
    clientId: '78xnztjf0u5umr',
    clientsecret: 'edznXLWlJ8C4ppIh',
    redirectUrl: 'https://linkedinsociallogin.herokuapp.com/admin',
  };

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  codeInResponse(linkedintoken) {
    this.linkedInToken = this.route.snapshot.queryParams['code'];
    return this.linkedInToken;
  }

  exchangeAuthCode(accessToken) {
    return this.http.post(
      `https://www.linkedin.com/oauth/v2/accessToken&grant_type=authorization_code&code=${this.linkedInToken}&redirect_uri=${this.linkedInCredentials.redirectUrl}&client_id=${this.linkedInCredentials.clientId}&client_secret=${this.linkedInCredentials.clientsecret}`,
      this.httpOptions
    );
  }
}
