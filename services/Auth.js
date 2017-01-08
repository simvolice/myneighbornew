/**
 * Created by Admin on 06.01.2017.
 */


const MongoClient = require('mongodb').MongoClient;

const co = require('co');
const url = 'mongodb://localhost:27017/myneighbornew';



module.exports = {

    registration: function (objParams) {

        return co (function*() {

            // Connection URL
            const db = yield MongoClient.connect('mongodb://localhost:27017/myneighbornew');
            console.log("Connected correctly to server");

            // Get the collection
            const col = db.collection('users');



           const result = yield col.insertOne({email: objParams.email, password: objParams.password});



            db.close();


           return result;






        }).catch(function (err) {

            return err;



        });



    },



    login: function (objParams) {

        return co(function*() {


            // Connection URL
            const db = yield MongoClient.connect('mongodb://localhost:27017/myneighbornew');
            console.log("Connected correctly to server");

            // Get the collection
            const col = db.collection('users');



            const result = yield col.findOne({email: objParams.email});



            db.close();




            return result;



        }).catch(function (err) {

            return err;


        });


    }


};