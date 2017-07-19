let mongoose = require('mongoose');
let { connect, Schema } = require('../../utils/mongoose');

const UsersSchema = new Schema({
    name: { type: String, default: 'hahaha' },
    age: { type: Number, min: 18, index: true },
    bio: { type: String, match: /[a-z]/ },
    date: { type: Date, default: Date.now }
})

const UsersModel = mongoose.model('Users', UsersSchema);

module.exports = UsersModel;

