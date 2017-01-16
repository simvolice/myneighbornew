/**
 * Created by simvolice on 15.01.2017 20:41.
 */

const MongoClient = require('mongodb').MongoClient;

const co = require('co');
const config = require('../utils/config');



module.exports = {





    editmyprofile: function (objParams) {

        return co (function*() {

            // Connection URL
            const db = yield MongoClient.connect(config.urlToMongoDB);
            console.log("Connected correctly to server");

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
            const db = yield MongoClient.connect(config.urlToMongoDB);
            console.log("Connected correctly to server");

            // Get the collection
            const col = db.collection('users');




            //TODO Здесь надо сделать аггрегацию, с полнотекстовым поиском.

            const result = yield col.find(

                { 'coord':
                    { $near :
                        { $geometry:
                            { type: "Point",  coordinates: [ objParams.coord ] },
                            $maxDistance: 1000 //Это в метрах
                        }
                    }
                }
            ).toArray();



            db.close();


            return result;






        }).catch(function (err) {

            return err;



        });



    }










};