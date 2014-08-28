/**
 * Created by root on 8/28/2014.
 */

exports.queryCollection = function(req,res){

    var db = require("../helper/dbhelper").conn_db();   //connect to the databases

//    var collectionName = req.params.collectionName;

    <!--query the content of collection -->
    db.open(function(err,db){

        if(err){
            console.log(err);
            return false;
        }

        db.collection('language_cn',{safe:true},function(err,collection){
            collection.find().toArray(function(err,items){
                if(err){
                    console.log(err);
                    return false;
                }
                res.json(items);
                db.close();   //close the connection.
                console.log("the db-connection is closed.");
            });
        });
    });

};