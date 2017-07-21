const mongoose = require('mongoose');

//import models e.g.:
const User = mongoose.model('User');
const Question = mongoose.model('Question');
const bcrypt = require('bcrypt');

module.exports = {

	register: (req,res) =>{
		let userAboutToBeCreated = new User(req.body);
        userAboutToBeCreated.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
		userAboutToBeCreated.save( (err, user) =>{
			if(err){
				let errors = [];
				for (let x in userAboutToBeCreated.errors){
				 	errors.push(userAboutToBeCreated.errors[x].message);
				}
				errors.push("User with that email already exists");
				return res.status(400).send(errors);
			} else {
				req.session.user = userAboutToBeCreated._id;
				res.json(user);
			}
		})
	},

	login: (req,res) =>{
		User.findOne({email: req.body.email}, (err, user)=>{
			if(err){
				let errors = [];
				for (let i in err.errors){
					errors.push(err.errors[i].message)
				}
				return res.status(400).send(errors);
			} 
			if(user==null){
				let errors = ['Email not found, please register']
				return res.status(400).send(errors)
			} else {
				if(bcrypt.compareSync(req.body.password, user.password)){
					req.session.user = user._id;
					res.json(user);
				} else {
					let errors = ['Invalid credentials'];
					return res.status(400).send(errors);
				};
			}
		})
	},

	addQuestion: (req,res) =>{
		let newQuestion = new Question(req.body);
		newQuestion._user = req.session.user;
		newQuestion.save( (err, createdQuestion)=>{
			if(err){
				let errors = [];
				for (let i in newQuestion.errors){
					errors.push(newQuestion.errors[i].message)
				}
				return res.status(400).send(errors);
			} else {
				return res.json(createdQuestion);
			}
		})
	},

	getUsers: (req,res) =>{
		User.find({}, (err, userList)=>{
			if(err){
				let errors = [];
				for(let i in err.errors){
					errors.push(err.errors[i].message);
					return res.status(400).send(errors);
				}
			} else {
				return res.json(userList);
			}
		});
	},

	logout: (req,res) =>{
		delete req.session
	}

}
