import { Component, OnInit } from '@angular/core';
import { ConfigService, Config } from '../config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  linkedinLogin() {
    window.location.href = `https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=${this.linkedInCredentials.clientId}&redirect_uri=${this.linkedInCredentials.redirectUrl}&state=987654321`;
  }

  
}
