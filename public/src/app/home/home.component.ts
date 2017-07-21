import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User } from './../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	errors = [];

  constructor(
  	private _userService: UserService,
  	private _router: Router ) { }

  ngOnInit() {
  }

  logout(){
  	this._userService.serviceLogout()
  }
}
