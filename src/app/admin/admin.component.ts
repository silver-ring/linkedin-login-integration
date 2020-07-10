import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ConfigService } from '../config.service'
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  linkedInToken = '';

  accesstoken :any ; 

  json; 

  public accessToken= '';

   
  constructor(
    private route: ActivatedRoute,
    private service: ConfigService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.linkedInToken = this.service.codeInResponse(this.linkedInToken);

    
    console.log(this.linkedInToken);

    this.accesstoken = this.service
      .exchangeAuthCode(this.accesstoken)
      .subscribe(
        (data) => {
          console.log(JSON.stringify(data));
          this.accessToken = data.access_token;
          console.log(this.accessToken + 'From component ');
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Client-side error occured.');
          } else {
            console.log('Server-side error occured.');
          }
        }
      );














    //Working live Code for access token

    /* 
    this.http
      .post<any>(
        `https://www.linkedin.com/oauth/v2/accessToken?&grant_type=authorization_code&code=${this.linkedInToken}&redirect_uri=${this.linkedInCredentials.redirectUrl}&client_id=${this.linkedInCredentials.clientId}&client_secret=${this.linkedInCredentials.clientsecret}`,
        this.paramsOptions,
        this.httpOptions
      )
      .subscribe(
        (data) => {
          console.log(JSON.stringify(data));
          this.accesstoken = data.access_token;
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Client-side error occured.');
          } else {
            console.log('Server-side error occured.');
          }
        }
      );*/
    //working live code for access token ends here .................
  }
}
