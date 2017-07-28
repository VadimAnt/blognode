var express = require('express');
var BaseController = require('../BaseController');
var menuModel = require('../../models/Menu/MenuModel');
var blogsModel = require('../../models/Blog/BlogsModel');
var connect = require('mongoose');

class HomeController extends BaseController{
    constructor(req, res){
        super(req, res);
    }

    async index(req, res, next){
        var menu = await super.getMenu();

        // menuModel.create({
        //     name: 'Test1',
        //     url: 'test',
        //     status: 'active',
        //
        // },{
        //     name: 'Test2',
        //     url: 'test',
        //     status: 'active',
        //
        // },{
        //     name: 'Test3',
        //     url: 'test',
        //     status: 'active',
        //
        // },{
        //     name: 'Test4',
        //     url: 'test',
        //     status: 'active',
        //
        // },{
        //     name: 'Test5',
        //     url: 'test',
        //     status: 'active',
        //
        // });


        console.log(menu);

        res.json({
            menu: menu
        });
    }

};

var homeController = new HomeController();
exports.index = homeController.index;