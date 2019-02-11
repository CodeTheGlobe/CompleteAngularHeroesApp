var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var validate = require('../validate/validate');
var Heroes = require('../models/Heroes');
//var getId = require('../getId');

//var Verify = require('./verify');


var id;

var heroesRouter = express.Router();
heroesRouter.use(bodyParser.json());

heroesRouter.route('/')


.get(function(req,res,next) {

     Heroes.find({}, function(err,heroes){
         if(err) throw err;
         id = heroes.length;
         res.json(heroes);

     });


})

.put(function(req,res,next) {
    const {id,name} = req.body;
    Heroes.findOneAndUpdate({id}, {
        $set: {
            name
        }
    }, (err, result) => {
        if (err) return res.send(err)
        res.send(result)
    })
});



heroesRouter.route('/:id')

.get(function(req,res,next) { 
    var id = req.params.id;

    Heroes.findOne({id:id}, function(err,obj){
         if(err) throw err;
         res.json(obj);

     });


});


heroesRouter.route('/:id')

.delete(function(req,res,next) {
    var id = req.params.id;

    Heroes.remove({id:id}, function(err, resp){
        if(err) return next(err);
        res.json(resp);
    });


});

heroesRouter.route('/')

.post(function(req,res,next) {
   
    //Throws an error if body fails content and type validation
    // validate(body,validator);

     Heroes.count({}, function(err,num){
         if(err) throw err;
         console.log(req.body);
         req.body.id = num+11;
         Heroes.create(req.body, function(err,obj) {
            if(err) return next(err);
            res.json(obj);
        });
//         res.json(obj);

     });

    
//    req.body.id = id+12;

    
   


});




module.exports = heroesRouter;
