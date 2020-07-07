import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router, ActivatedRoute, Params } from '@angular/router';




@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  linkedInToken = '';

  codeInResponse(linkedintoken) {
     this.linkedInToken = this.route.snapshot.queryParams['code'];
     return this.linkedInToken
  }
}
