/**
 * Created by Серик on 27.12.2016.
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;






// create a schema
var userSchema = new Schema({

    FIO: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    email: {type: String, required: true, unique: true},



    location: {

        lat: {type: String, required: true},
        lon: {type: String, required: true}


    },

    phone: {type: String, required: true, unique:true},


    myservices: {type: Array, required: true},

    avatar: {type: String},

    rating: {type: Number},

    aboutme: {type: String}




});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('Users', userSchema);

// make this available to our users in our Node applications
module.exports = User;
