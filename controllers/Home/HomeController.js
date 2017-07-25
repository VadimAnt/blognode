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

        console.log('ddd')
        var blogs = await blogsModel.find({}).sort({date: 'desc'}).limit(9);
        var menu = await super.getMenu();

        res.render('Home/index', {
            menu: menu,
            blogs: blogs
        });
    }

};

var homeController = new HomeController();
exports.index = homeController.index;