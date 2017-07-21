//each individual schema goes here:

const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
        // password_confirmation: {type:String, required:true},
        first_name: {
          type: String,
          required: [true, "You must enter a first name"],
          trim: true,
        },
        last_name: {
            type: String,
            required: [true, "You must enter a last name"],
            trim: true
        },
        email: {
            type: String, 
            required: [true, "You must enter an email"],
            validate: {
            	validator: (value) => {
                	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            	},
            	message: "Email failed validation, you must enter a proper email format"
            },
            unique: true
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
            validate: {
                validator: function( value ) {
                    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
                },
                message: "Password failed validation, you must have at least 1 number, uppercase and special character"
            }
        },
    }, { timestamps:true });

// UserSchema.pre('save',  function(next) {
//     if(this.password != this.password_confirmation){
//         // This line will create an error message that matches the format of our other error messages
//         this.invalidate('password', "Password and Password Confirmation must match");
//         // In order for our pre-save method to fail we must pass an err into next()
//         let err = new Error("Password and password confirmation do not match");
//         console.log(err);
//         next(err);
//     }else{
//         // remove password_confirmation so we're not storing it
//         this.password_confirmation = '';
//         next();
//     }
// })
mongoose.model('User', UserSchema);