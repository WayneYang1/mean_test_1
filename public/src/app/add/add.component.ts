import { Component, OnInit } from '@angular/core';
import { Question } from './../../question';
import { QuestionService } from './../../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
	errors: Array<any> = [];
	newQuestion: Question = new Question();

  constructor(
  	private _questionService: QuestionService,
  	private _router: Router) { }

  ngOnInit() {
  }

  listQuestion(){
  	this._questionService.serviceAddQuestion(this.newQuestion)
  		.then( response =>{
  			this.newQuestion = new Question();
  			this._router.navigate(['/home'])
  		})
  		.catch ( err =>{
  			this.errors = JSON.parse(err._body)
  		})
  }
}
