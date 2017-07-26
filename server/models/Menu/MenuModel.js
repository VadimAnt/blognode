let mongoose = require('mongoose');
let { Schema, ObjectIdSchema, ObjectId } = require('../../utils/mongoose');


const MenuSchema = new Schema({
    _id:  {type:ObjectIdSchema, default: function () { return new ObjectId()} },
    name: { type: String },
    url: { type: String },
    status: { type: String },
    date: { type: Date, default: Date.now }
});

const MenuModel = mongoose.model('menus', MenuSchema);

module.exports = MenuModel;