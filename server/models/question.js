//each individual schema goes here:

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let QuestionSchema = new Schema({
	content: {
		type:String,
		required:[true, 'Please ask a question'],
		minlength:[10, 'Question must be longer than 10 characters']
	},

	description: {
		type: String,
		_user:{
			type: Schema.Types.ObjectId,
			ref: 'User'
		}
	}
}, {timestamps:true});

mongoose.model('Question', QuestionSchema);