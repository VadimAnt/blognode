var express = require('express');
var BaseController = require('../BaseController');
var UsersModel = require('../../models/Users/UsersModel');
var connect = require('mongoose');

class HomeController extends BaseController{

    async index(req, res, next){
        // var user = new UsersModel({
        //     name: 'test',
        //     age: 20,
        //     bio:'a'
        // });

        // console.log(user);
        // let result = await user.save();


        res.render('Home/index', { title: 'dfgdfgdfg' });
    }

};

var homeController = new HomeController();
exports.index = homeController.index;