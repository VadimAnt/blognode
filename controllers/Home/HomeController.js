var express = require('express');
var BaseController = require('../BaseController');
var menuModel = require('../../models/Menu/MenuModel');
var connect = require('mongoose');

class HomeController extends BaseController{
    constructor(){
        super();
    }

    async index(req, res, next){
        // var user = new UsersModel({
        //     name: 'test',
        //     age: 20,
        //     bio:'a'
        // });

        // // console.log(user);
        // // let result = await user.save();
        // var menu = menuModel;
        // let arr = [{
        //     'name': 'test1',
        //     'url': 'test1',
        //     'status': 'active'
        // },{
        //     'name': 'test2',
        //     'url': 'test2',
        //     'status': 'active'
        // },{
        //     'name': 'test3',
        //     'url': 'test3',
        //     'status': 'active'
        // },{
        //     'name': 'test4',
        //     'url': 'test4',
        //     'status': 'active'
        // },{
        //     'name': 'test5',
        //     'url': 'test5',
        //     'status': 'block'
        // }];


        // let result = await  menu.create(arr);
        // console.log(result);

        res.render('Home/index', { title: 'dfgdfgdfg' });
    }

};

var homeController = new HomeController();
exports.index = homeController.index;