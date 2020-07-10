import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
       let tokenizedReq = request.clone({
         setHeaders: {
           //Authorization:'Bearer xx.yy.zz'
         //  Authorization: `Bearer ${localStorage.getItem('token')}`, //es6 syntx to embed the value of token as a string
         },
         //headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
       });
       //we pass on the execution by oassing in the tokenised request
       return next.handle(tokenizedReq);
    
  }
}
