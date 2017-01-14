/**
 * Created by Admin on 06.01.2017.
 */


const MongoClient = require('mongodb').MongoClient;

const co = require('co');
const url = 'mongodb://194.87.237.153:27017/myneighbornew';



module.exports = {

    registration: function (objParams) {

        return co (function*() {

            // Connection URL
            const db = yield MongoClient.connect(url);
            console.log("Connected correctly to server");

            // Get the collection
            const col = db.collection('users');



           const result = yield col.insertOne({email: objParams.email, password: objParams.password, activateEmail: false, activateToken: objParams.activateToken});



            db.close();


           return result;






        }).catch(function (err) {

            return err;



        });



    },



    login: function (objParams) {

        return co(function*() {


            // Connection URL
            const db = yield MongoClient.connect(url);
            console.log("Connected correctly to server");

            // Get the collection
            const col = db.collection('users');



            const result = yield col.findOne({email: objParams.email});



            db.close();



            if (result.activateEmail) {


                return result;

            }else {


                return {"code": "activateEmailError"}

            }










        }).catch(function (err) {

            return err;


        });


    },


    verifEmail: function (token) {


        return co(function*() {



            const db = yield MongoClient.connect(url);
            console.log("Connected correctly to server");


            const col = db.collection('users');



            const result = yield col.findOneAndUpdate({activateToken: token}, {$set: {activateEmail: true}});



            db.close();





            return result;



        }).catch(function (err) {

            return err;


        });




    }



};