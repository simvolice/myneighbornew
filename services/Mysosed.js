/**
 * Created by simvolice on 15.01.2017 20:41.
 */

const MongoClient = require('mongodb').MongoClient;

const Logger = require('mongodb').Logger;
Logger.setLevel('debug');



const co = require('co');
const config = require('../utils/config');



module.exports = {





    editmyprofile: function (objParams) {

        return co (function*() {

            // Connection URL
            const db = yield MongoClient.connect(config.urlToMongoDB);

            // Get the collection
            const col = db.collection('users');



            const result = yield col.findOneAndUpdate({_id: objParams.id}, {$set: {}});



            db.close();


            return result;






        }).catch(function (err) {

            return err;



        });



    },



    searchnearcoord: function (objParams) {



        return co (function*() {

            // Connection URL
            const db = yield MongoClient.connect(config.urlToMongoDBLocalhost);

            // Get the collection
            const col = db.collection('primer-dataset');
            const tempCollForCoord = db.collection('tempCollForCoord');





            //TODO Здесь надо сделать аггрегацию, с полнотекстовым поиском.

            col.aggregate([



                {'$geoNear': {
                near : { type: "Point", coordinates: [ -73.961704, 40.662942 ] },
                spherical: true,
                maxDistance: 1000,
                distanceField: "dist.calculated"
            }

            },

                {
                    '$out': 'tempCollForCoord'
                }







            ], function (err) {




            });






            tempCollForCoord.createIndex({name : "text" });

            const result = yield tempCollForCoord.aggregate([



                {'$match': {
                    '$text': {'$search' : 'Pizza' }
                }},

                {
                    '$project': {
                        '_id': 0, 'name' : 1
                    }
                }



                ]).toArray();





            db.close();


            return result;






        }).catch(function (err) {

            return err;



        });



    }










};