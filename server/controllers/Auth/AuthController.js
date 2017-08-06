let express = require('express');
let BaseController = require('../BaseController');
let connect = require('mongoose');
let Users = require('../../models/Users/UsersModel');
let jwt = require('jsonwebtoken');

class AuthController extends BaseController{
    constructor(req, res){
        super(req, res);
    }

    async login(req, res, next){
        if(req.body.name && req.body.password){
            let name = req.body.name;
            let password = req.body.password;
        }
        // usually this would be a database call:
        let user = Users.find({
            name: name
        });
        if( ! user ){
            res.status(401).json({message:"no such user found"});
        }

        if(user.password === req.body.password) {
            // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
            let payload = {id: user.id};
            let token = jwt.sign(payload, jwtOptions.secretOrKey);
            res.json({message: "ok", token: token});
        } else {
            res.status(401).json({message:"passwords did not match"});
        }
    }
};

let authController = new AuthController();
exports.login = authController.login;