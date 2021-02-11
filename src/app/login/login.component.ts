import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../config.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ConfigService],
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  linkedinLogin() {
    window.location.href =
      `https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=AnRandomString007&scope=r_liteprofile r_emailaddress&client_id=${environment.linkedIn.clientId}&redirect_uri=${environment.linkedIn.redirectUrl}`;
  }

  ngOnInit() {

  }
}
