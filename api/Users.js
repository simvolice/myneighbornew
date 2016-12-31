/**
 * Created by Серик on 27.12.2016.
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;





// create a schema
var userSchema = new Schema({

    //поле ФИО
    FIO: { type: String, required: true, unique: true, min: 6, max: 30,

        validateFio:{
            validator: function (v) {
                return /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/.test(v);
            },
            message: '{VALUE} is not a valid FIO'
        }
    },

    //поле пароля
    password: { type: String, required: true, unique: true, min: 32, max:32,

        validatePass: {
            validator: function (v) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
            },
            message: '{VALUE} is not a valid password'
        }
    },

    //поле почты
    email: {type: String, required: true, unique: true, min: 6, max: 30,

        validateMail: {
            validator: function(v) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
            },
            message: '{VALUE} is not a valid email'
        }


    },


    // координаты широта и долгота
    location: {
        //широта
        lat: {type: Number, required: true, min: 3, max: 12,
            validateLat: {
                validator: function(v) {
                    return /^-?\d{1,3}\.\d+$/.test(v);
                },
                message: '{VALUE} is not a valid latitude'
            }
        },
        //долгота
        lon: {type: Number, required: true, min: 3, max: 12,
            validateLon: {
                validator: function(v) {
                    return /^-?\d{1,3}\.\d+$/.test(v);
                },
                message: '{VALUE} is not a valid longitude'
        }


    },

    //поле телефонного номера
    phone: {type: String, required: true, unique:true, min: 11, max: 12,
        validatePhone: {
            validator : function (v) {
                return /^\d[\d\(\)\ -]{11,12}\d$/.test(v);
            },
            message: '{VALUE} is not phone'
        }
    }
    },

    // спектр оказания услуг
    myServices: {type: Array, required: true, min: 1, max: 25},

    //аватар
    avatar: {type: String, min:1, max:12,
        validateMe: {
            validator: function (v) {
                return /^[a-zA-Z0-9]+$/.test(v);
            },
            message: '{VALUE} isn\'t info about User'
        }
    },

    // рейтинг
    rating: {type: Number, min: 1, max:5,
        validateMe: {
            validator: function (v) {
                return /^[0-9]+$/.test(v);
            },
            message: '{VALUE} isn\'t info about User'
        }
    },

    // обо мне
    aboutMe: {type: String, min:1, max: 300,
        validateMe: {
            validator: function (v) {
                return /^[а-яА-ЯёЁa-zA-Z0-9]+$/.test(v);
            },
            message: '{VALUE} isn\'t info about User'
        }
    }




});



var User = mongoose.model('Users', userSchema);

// make this available to our users in our Node applications
module.exports = User;
