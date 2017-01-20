/**
 * Created by simvolice on 20.01.2017 16:22
 */



const config = require('../utils/config');

const MongoClient = require('mongodb').MongoClient;

const Logger = require('mongodb').Logger;
Logger.setLevel('debug');

const co = require('co');




module.exports = {


    cleanDB: function (objParams) {

        return co(function*() {

            // Connection URL
            const db = yield MongoClient.connect(config.urlToMongoDBLocalhost);

            // Get the collection
            const col = db.collection('users');


            const result = yield col.insertOne({
                email: objParams.email,
                password: objParams.password,
                activateEmail: false,
                activateToken: objParams.activateToken
            });


            db.close();


            return result;


        }).catch(function (err) {

            return err;


        });


    }


};
