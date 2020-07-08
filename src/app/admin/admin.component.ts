import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ConfigService} from '../config.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  linkedInToken = '';

  public postResponse = {
    accessToken:'',
    refreshtime:''
  };
  json ;

  constructor(private route: ActivatedRoute , private service:ConfigService ) {}
  

  ngOnInit() {
  this.linkedInToken = this.service.codeInResponse(this.linkedInToken);
  
  this.service.exchangeAuthCode().subscribe((res: any) => {
  console.log(res.json.access_token);
  this.json = JSON.parse(res.json);
  });
  }
  onPost(){
    
      /*this.postResponse=res,
        this.service.setToken(res['access_token']);
        console.log(this.postResponse.accessToken);*/
    
 
  }

}
