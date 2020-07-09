import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ConfigService } from '../config.service'
import {HttpClient, HttpHeaders, } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  linkedInToken = '';
  accessToken = '';

  public postResponse = {
    accessToken: '',
    refreshtime: '',
  };

  json;

  constructor(
    private route: ActivatedRoute,
    private service: ConfigService,
    private http: HttpClient
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      //'Content-Type': 'application/json', //removing the header option as without it also this works tested via postman
      'Access-Control-Request-Headers':  'https://linkedinsociallogin.herokuapp.com/' || '*',
    }),
  };

  linkedInCredentials = {
    clientId: '78xnztjf0u5umr',
    clientsecret: 'edznXLWlJ8C4ppIh',
    redirectUrl: 'https://linkedinsociallogin.herokuapp.com/admin',
  };

  ngOnInit() {
    this.linkedInToken = this.service.codeInResponse(this.linkedInToken);

    /*  this.service.exchangeAuthCode(this.accessToken).subscribe((res: any) => {  // not working only giving error statusText: "Unknown Error" 
console.log(res.json.access_token);
// this.json = JSON.parse(res.json);
});*/
    console.log(this.linkedInToken);

    this.http
      .get(
        `https://www.linkedin.com/oauth/v2/accessToken?&grant_type=authorization_code&code=${this.linkedInToken}&redirect_uri=${this.linkedInCredentials.redirectUrl}&client_id=${this.linkedInCredentials.clientId}&client_secret=${this.linkedInCredentials.clientsecret}`,

        this.httpOptions
      )
      .subscribe(
        (res: any) => {
          console.log(res);
        },
        (err) => {
          console.log(err.message);
        }
      );
  }
}
