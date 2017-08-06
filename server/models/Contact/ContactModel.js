let mongoose = require('mongoose');
let { Schema, ObjectIdSchema, ObjectId } = require('../../utils/mongoose');

const ContactSchema = new Schema({
    _id:  {type:ObjectIdSchema, default: function () { return new ObjectId()} },
    name: { type: String },
    family: { type: String },
    email: { type: String },
    file: { type: String },
    date: { type: Date, default: Date.now }
})

const ContactModel = mongoose.model('contacts', ContactSchema);

module.exports = ContactModel;