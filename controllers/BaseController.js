var menuModel = require('../models/Menu/MenuModel');

module.exports = class BaseController {
    constructor(){}

    async getMenu(){
       let res = await menuModel.find({});
       return res;
    }

};