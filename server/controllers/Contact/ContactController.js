var express = require('express');
var BaseController = require('../BaseController');
var connect = require('mongoose');

class ContactController extends BaseController{
    constructor(req, res){
        super(req, res);
    }

    async index(req, res, next){
        console.log(req.body, req.files);

        res.json({
            menu: 'test'
        });
    }

};

var contactController = new ContactController();
exports.index = contactController.index;