let express = require('express');
let BaseController = require('../BaseController');
let connect = require('mongoose');
let contactModel = require('../../models/Contact/ContactModel');

class ContactController extends BaseController{
    constructor(req, res){
        super(req, res);
    }

    async index(req, res, next){
        try {

            console.log(req.files[0].filename);

            let result = await contactModel.create({
                name: req.body.name,
                family: req.body.family,
                email: req.body.email,
                file: (req.files.length > 0) ? req.files[0].filename : ''
            });

            res.json({
                name: req.body.name,
                family: req.body.family,
                email: req.body.email,
                file: (req.files.length > 0) ? req.files[0].filename : ''
            });
        } catch (err){
            return res.json({
                menu: err.toString()
            });
        }
    }
};

var contactController = new ContactController();
exports.index = contactController.index;