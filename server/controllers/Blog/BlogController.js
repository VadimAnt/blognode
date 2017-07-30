var express = require('express');
var BaseController = require('../BaseController');
var blogModel = require('../../models/Blog/BlogsModel');
var connect = require('mongoose');

class BlogController extends BaseController{
    constructor(){
        super();
    }

    async index(req, res, next){
        console.log('Blogs');
        let blogs = await blogModel.find({}).sort({date: 'desc'});

        res.json({
            blogs:blogs
        });
    }

    async view(req, res, next){
        let data = await blogModel.findOne({
            _id: req.params.id
        });

        console.log(data);

        res.json({
            post: data
        });
    }
};



var blogController = new BlogController();
exports.index = blogController.index;
exports.view = blogController.view;