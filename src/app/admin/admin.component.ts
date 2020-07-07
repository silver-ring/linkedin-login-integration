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

  constructor(private route: ActivatedRoute , private service:ConfigService ) {}

  ngOnInit() {
  this.linkedInToken = this.service.codeInResponse(this.linkedInToken);
  }
}
