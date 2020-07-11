import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _router: Router) {}

  loggedIn() {
    //we want a boolean value
    return !!localStorage.getItem('token');
    // return !!sessionStorage.getItem('token') ;
  }
}
