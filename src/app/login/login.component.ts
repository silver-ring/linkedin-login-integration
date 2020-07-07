import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : any ;
  constructor(private service:ConfigService) { }

  ngOnInit(): void {
  }
  getUsers(){
    this.service.getData().subscribe((data)=>
    {
      console.log(data);
      
    })
  }
}
