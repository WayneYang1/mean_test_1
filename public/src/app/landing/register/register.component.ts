import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service';
import { User } from './../../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	errors : Array<any> = [];
	user : User = new User();

  constructor(private _userService: UserService,
  	private _router: Router) { 
  }

  ngOnInit() {
  }

  register(){
  	this._userService.serviceAddUser(this.user)
  		.then(response => {
  			this.user = new User();
  			this._router.navigate(['/home'])
  		})
  		.catch( err =>{
  			this.errors = JSON.parse(err._body)
  		})
  }
}
