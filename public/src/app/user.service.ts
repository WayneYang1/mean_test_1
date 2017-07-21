import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  serviceAddUser(newUser){
  	return this._http.post('/api/register', newUser)
  		.map(response => response.json())
  		.toPromise()
  }

  serviceLogUser(user){
  	return this._http.post('/api/login', user)
  		.map(response => response.json())
  		.toPromise()
  }

  serviceLogout(){
    return this._http.get('/api/logout')
  }
}
