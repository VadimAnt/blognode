let mongoose = require('mongoose');
let { Schema, ObjectIdSchema, ObjectId } = require('../../utils/mongoose');

const UsersSchema = new Schema({
    _id:  {type:ObjectIdSchema, default: function () { return new ObjectId()} },
    name: { type: String,},
    password: { type: String},
    age: { type: Number, min: 18, index: true },
    bio: { type: String, match: /[a-z]/ },
    date: { type: Date, default: Date.now },
})

const UsersModel = mongoose.model('Users', UsersSchema);

module.exports = UsersModel;

