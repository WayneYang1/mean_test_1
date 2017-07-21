import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class QuestionService {

  constructor(private _http: Http) { }

  serviceAddQuestion(newQuestion){
  	return this._http.post('/api/add_question', newQuestion)
  	.map(response=> response.json())
  	.toPromise()
  }
}
