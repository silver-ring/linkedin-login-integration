import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}
  getData():Observable<any>{
    const url = " https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=AnRandomString007&scope=r_liteprofile&client_id=78xnztjf0u5umr&redirect_uri=https://linkedinsociallogin.herokuapp.com/login";
    return this.http.get<any>(url)
  }
}
