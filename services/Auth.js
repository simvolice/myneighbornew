/**
 * Created by Admin on 06.01.2017.
 */


const MongoClient = require('mongodb').MongoClient;

const co = require('co');
const url = 'mongodb://localhost:27017/myneighbornew';



module.exports = {

    registration: function (objParams ,res) {

        return co (function*() {

            // Connection URL
            const db = yield MongoClient.connect('mongodb://localhost:27017/myneighbornew');
            console.log("Connected correctly to server");

            // Get the collection
            const col = db.collection('users');



           const result = yield col.insertOne({email: objParams.email, password: objParams.password, token: objParams.token});



            db.close();


            res.json(result);






        }).catch(function (err) {

            console.log(err.stack);



        });



    }





};