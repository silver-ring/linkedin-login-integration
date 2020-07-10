import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';



@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  linkedInToken = '';
  accesstoken :any;

  httpOptions = {
    // not working refused to set unsafe
    headers: new HttpHeaders({
      //'Content-Type': 'application/json', //removing the header option as without it also this works tested via postman
      //'Access-Control-Request-Headers': 'Origin, Content-Type, X-Auth-Token, content-type', //main.7c2d8c1bc547b29396b0.js:1 Refused to set unsafe header "Access-Control-Request-Headers"
      'Access-Control-Request-Headers': '*',
      'Access-Control-Allow-Methods': 'GET,POST',
      'Origin': '*', // Refused to set unsafe header "Origin"
      //'Accept':'text/html, application/xhtml+xml, application/xml;q=0.9, */  /**;q=0.8',
    }),
  };
  paramsOptions = {
    header: new XMLHttpRequest(),
  };

  linkedInCredentials = {
    clientId: '78xnztjf0u5umr',
    clientsecret: 'edznXLWlJ8C4ppIh',
    redirectUrl: 'https://linkedinsociallogin.herokuapp.com/admin',
  };

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  codeInResponse(linkedintoken) {
    this.linkedInToken = this.route.snapshot.queryParams['code'];
    return this.linkedInToken;
  }

  exchangeAuthCode(accesstoken) {
     return this.http
      .post<any>(
        `https://www.linkedin.com/oauth/v2/accessToken?&grant_type=authorization_code&code=${this.linkedInToken}&redirect_uri=${this.linkedInCredentials.redirectUrl}&client_id=${this.linkedInCredentials.clientId}&client_secret=${this.linkedInCredentials.clientsecret}`,
        this.paramsOptions,
        this.httpOptions
      )
      .subscribe(
        (data) => {
          console.log(JSON.stringify(data));
          this.accesstoken = data.access_token;
          console.log(this.accesstoken +"From service ");
          
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Client-side error occured.');
          } else {
            console.log('Server-side error occured.');
          }
        }
      );
  }
}
