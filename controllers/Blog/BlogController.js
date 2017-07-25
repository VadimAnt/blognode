var express = require('express');
var BaseController = require('../BaseController');
var blogModel = require('../../models/Blog/BlogsModel');
var connect = require('mongoose');

class BlogController extends BaseController{
    constructor(){
        super();
    }

    async index(req, res, next){
        var menu = await super.getMenu();
        let blogs = await blogModel.find({}).sort({date: 'desc'}).limit(9);

        res.render('Blog/index', {
            menu: menu,
            blogs:blogs
        });
    }

    async view(req, res, next){
        let menu = await super.getMenu();
        let data = await blogModel.findOne({
            _id: req.params.id
        });

        console.log(data);
        res.render('Blog/view', {
            menu: menu,
            data: data
        });
    }

};



var blogController = new BlogController();
exports.index = blogController.index;
exports.view = blogController.view;