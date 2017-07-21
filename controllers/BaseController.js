var menuModel = require('../models/Menu/MenuModel');

module.exports = class BaseController {
    constructor(){
        this.menu = this.getMenu();
    }

    async getMenu(){
        let user = await menuModel.find({});
        console.log(user);
        return user;
    }
}