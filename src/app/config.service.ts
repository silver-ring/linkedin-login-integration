import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


export interface Config {
  linkedinUrl: string;
  code: any;
  state:any;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private url: any =
    ' https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=AnRandomString007&scope=r_liteprofile&client_id=78xnztjf0u5umr&redirect_uri=https://linkedinsociallogin.herokuapp.com/login';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.url);
  }
}
