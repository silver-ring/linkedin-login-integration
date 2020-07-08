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
  
  private linkedInCredentials = {
    clientId: '78xnztjf0u5umr',
    clientsecret: 'edznXLWlJ8C4ppIh',
    redirectUrl: 'https://linkedinsociallogin.herokuapp.com/admin',
  };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  linkedInToken = '';

  codeInResponse(linkedintoken) {
    this.linkedInToken = this.route.snapshot.queryParams['code'];
    return this.linkedInToken;
  }

  exchangeAuthCode() {
    return this.http.post(
      `https://www.linkedin.com/oauth/v2/accessToken&grant_type=authorization_code&code=${this.linkedInToken}&redirect_uri=${this.linkedInCredentials.redirectUrl}&client_id=${this.linkedInCredentials.clientId}&client_secret=${this.linkedInCredentials.clientsecret}`,
      this.httpOptions
    );
  }

  setToken(token: any) {
    localStorage.setItem('access_token', token);
  }
}
