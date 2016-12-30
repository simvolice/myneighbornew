/**
 * Created by Серик on 27.12.2016.
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;





// create a schema
var userSchema = new Schema({

    FIO: { type: String, required: true, unique: true, min: 6, max: 30},
    password: { type: String, required: true, unique: true, min: 32, max:32 },
    email: {type: String, required: true, unique: true, min: 6, max: 30,

        validate: {
            validator: function(v) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
            },
            message: '{VALUE} is not a valid email'
        }


    },



    location: {

        lat: {type: Number, required: true},
        lon: {type: Number, required: true}


    },

    phone: {type: String, required: true, unique:true},


    myservices: {type: Array, required: true},

    avatar: {type: String},

    rating: {type: Number},

    aboutme: {type: String}




});



var User = mongoose.model('Users', userSchema);

// make this available to our users in our Node applications
module.exports = User;
