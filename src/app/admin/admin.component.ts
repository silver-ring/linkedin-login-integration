import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  linkedInToken = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.linkedInToken = this.route.snapshot.queryParams['code'];
  }
}
