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
  accessToken = '';

  public postResponse = {
    accessToken: '',
    refreshtime: '',
  };

  json;

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

  paramsOptions ={
    header : new XMLHttpRequest()
    
  }

  constructor(
    private route: ActivatedRoute,
    private service: ConfigService,
    private http: HttpClient
  ) {}

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
    const req = this.http
      .put(
        `https://www.linkedin.com/oauth/v2/accessToken?&grant_type=authorization_code&code=${this.linkedInToken}&redirect_uri=${this.linkedInCredentials.redirectUrl}&client_id=${this.linkedInCredentials.clientId}&client_secret=${this.linkedInCredentials.clientsecret}`,
        //null
        this.paramsOptions,
        this.httpOptions
    
      )
      .subscribe(
        (res: any) => {
          this.json=JSON.parse(res)
          console.log(this.json);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Client-side error occured.');
          } else {
            console.log('Server-side error occured.');
          }
        }
      );
    /*this.http.get(`https://www.linkedin.com/oauth/v2/accessToken?&grant_type=authorization_code&code=${this.linkedInToken}&redirect_uri=${this.linkedInCredentials.redirectUrl}&client_id=${this.linkedInCredentials.clientId}&client_secret=${this.linkedInCredentials.clientsecret}`)
    .subscribe(
      data =>{
      console.log(data);
      
    },
    (err: HttpErrorResponse) =>
    {
      if (err.error instanceof Error) {
        console.log('Client-side error occured.');
      } else {
        console.log('Server-side error occured.');
      }
    }
    )*/
  }
}
