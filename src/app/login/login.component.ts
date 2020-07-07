import { Component, OnInit } from '@angular/core';
import { ConfigService, Config } from '../config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ConfigService],
})
export class LoginComponent implements OnInit {
  config: Config;
  user: any;
  constructor(private service: ConfigService) {}

  ngOnInit(): void {}
  getUsers(){};
  /*getUsers() {
    this.service.getData().subscribe(
      (data: Config) =>
        (this.config = {
          linkedinUrl: data['linkedinUrl'],
          code:data['code'],
          state:data['state']

          
        })
    );
    console.log(config);
  }*/
}
