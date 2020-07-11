import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Resolve } from '@angular/router';
import { ConfigService } from '../config.service'
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  linkedInToken = '';

  accesstoken: any;

  json;
  firstName;
  lastName;
  photoUrl;

  public accessToken = '';

  /*httpOptions = {
    headers: new HttpHeaders({
      Connection: 'Keep-Alive',
      'Authorization ': `Bearer ${this.accessToken}`,
    }),
  };*/

  constructor(
    private route: ActivatedRoute,
    private service: ConfigService,
    private http: HttpClient,
    //private resolve: Resolve<any>
  ) {}

  ngOnInit() {
    //1st Get
    this.linkedInToken = this.service.codeInResponse(this.linkedInToken);

    console.log(this.linkedInToken);
    //2nd Post
    this.accesstoken = this.service
      .exchangeAuthCode(this.accesstoken)
      .subscribe(
        (data) => {
          console.log(JSON.stringify(data));
          this.accessToken = data.access_token;
          console.log(this.accessToken + 'From component ');
          localStorage.setItem('token', this.accessToken);

          console.log('hi I will be editing here ---------');
          console.log(this.accessToken + 'hello------------');

          //3rd Get
          const headers = new HttpHeaders({
            Authorization: `Bearer ${this.accessToken}`,
            Connection: 'Keep-Alive',
          });
          this.http
            .get<any>(
              'https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))',
              { headers }
            )
            .subscribe((data: any) => {
              console.log(JSON.stringify(data));
              this.json = data;

              this.firstName = data.firstName.localized.en_US;
              this.lastName = data.lastName.localized.en_US;
              const photoPic = JSON.parse(data);
              this.photoUrl=(
                photoPic['profilePicture']['displayImage~'].elements[0]
                  .identifiers[0].identifier
              );
              //this.photoUrl =data.profilePicture.displayImage~.elements[0].identifiers[0].identifier
              console.log(this.firstName);
              console.log(this.lastName);
              console.log(this.photoUrl);

              console.log(this.json);
            });
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
