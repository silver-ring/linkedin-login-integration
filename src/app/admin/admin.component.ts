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

   /**;q=0.8',
    }),
  };

  paramsOptions = {
    header: new XMLHttpRequest(),
  };
*/

  /*   //getting the token from the service 
  httpOptions = {
    // not working refused to set unsafe
    headers: new HttpHeaders({
      //'Content-Type': 'application/json', //removing the header option as without it also this works tested via postman
      //'Access-Control-Request-Headers': 'Origin, Content-Type, X-Auth-Token, content-type', //main.7c2d8c1bc547b29396b0.js:1 Refused to set unsafe header "Access-Control-Request-Headers"
      'Access-Control-Request-Headers': '*',
      'Access-Control-Allow-Methods': 'GET,POST',
      Origin: '*', // Refused to set unsafe header "Origin"
      //'Accept':'text/html, application/xhtml+xml, application/xml;q=0.9, */ //getting the token from the servce
  constructor(
    private route: ActivatedRoute,
    private service: ConfigService,
    private http: HttpClient
  ) {}
  //  Getting the access token from service
  /*
  linkedInCredentials = {
    clientId: '78xnztjf0u5umr',
    clientsecret: 'edznXLWlJ8C4ppIh',
    redirectUrl: 'https://linkedinsociallogin.herokuapp.com/admin',
  };
*/
  ngOnInit() {
    this.linkedInToken = this.service.codeInResponse(this.linkedInToken);

    /*  this.service.exchangeAuthCode(this.accessToken).subscribe((res: any) => {  // not working only giving error statusText: "Unknown Error" 
console.log(res.json.access_token);
// this.json = JSON.parse(res.json);
});*/
    console.log(this.linkedInToken);

    this.accesstoken = this.service.exchangeAuthCode(this.accesstoken.access_token);

    console.log(this.accesstoken+"From the admin");

    this.accessToken=this.accesstoken.access_token;

    console.log(this.accessToken+"2nd time ");
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
