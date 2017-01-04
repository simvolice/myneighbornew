/**
 * Created by Admin on 04.01.2017.
 */
const MongoClient = require('mongodb').MongoClient;

const co = require('co');
const url = 'mongodb://localhost:27017/myneighbornew';




module.exports = {



    getAllUsers: function(res) {


       return co(function*() {
            // Connection URL
            const db = yield MongoClient.connect('mongodb://localhost:27017/myneighbornew');
            console.log("Connected correctly to server");

            // Get the collection
            const col = db.collection('users');


            // Get first two documents that match the query
           const docs = yield col.find({}).toArray();

           db.close();



           res.json(docs);


        }).catch(function(err) {
            console.log(err.stack);

        });



    },

    getOneUser: function() {
        return "Test Users";
    }
};
















