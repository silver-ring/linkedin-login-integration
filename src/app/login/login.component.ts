import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ConfigService],
})
export class LoginComponent implements OnInit {
  linkedInCredentials = {
    clientId: '78xnztjf0u5umr',
    redirectUrl: 'https://linkedinsociallogin.herokuapp.com/admin',
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
      if (localStorage.getItem('token')) {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/login']);
      }

  }

  linkedinLogin() {
    window.location.href =
      ' https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=AnRandomString007&scope=r_liteprofile&client_id=78xnztjf0u5umr&redirect_uri=https://linkedinsociallogin.herokuapp.com/admin';
  }
}
