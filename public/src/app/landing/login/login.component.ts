import { Component, OnInit } from '@angular/core';
import { User } from './../../user';
import { UserService } from './../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	errors: Array<any>;
	user : User = new User();

  constructor(private _userService: UserService,
  	private _router: Router) { }

  ngOnInit() {
  }

  login(){
    this._userService.serviceLogUser(this.user)
    .then( response =>{
      this.user = new User();
      this._router.navigate(['/home']);
    })
    .catch( err =>{
      this.errors = JSON.parse(err._body)
    })
  }

}
