var express = require('express');
var BaseController = require('../BaseController');
var menuModel = require('../../models/Menu/MenuModel');
var blogsModel = require('../../models/Blog/BlogsModel');
var connect = require('mongoose');

class HomeController extends BaseController{
    constructor(req, res){
        console.log(req, res);
        super(req, res);
    }

    async index(req, res, next){
        var menu = await super.getMenu();
        res.render('Home/index', {
            blogs: blogs
        });
    }

};

var homeController = new HomeController();
exports.index = homeController.index;