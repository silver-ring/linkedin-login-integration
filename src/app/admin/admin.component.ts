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
          localStorage.setItem('token',this.accessToken);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Client-side error occured.');
          } else {
            console.log('Server-side error occured.');
          }
        }

      );

      console.log("hi I will be editing here ---------");
        


  }
}
