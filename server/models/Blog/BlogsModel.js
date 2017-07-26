let mongoose = require('mongoose');
let { Schema, ObjectIdSchema, ObjectId } = require('../../utils/mongoose');

const BlogSchema = new Schema({
    _id:  {type:ObjectIdSchema, default: function () { return new ObjectId()} },
    title: { type: String, default: 'Blog name' },
    text: { type: String },
    name: { type: String, default: 'Blog name' },
    date: { type: Date, default: Date.now }
})

const BlogModel = mongoose.model('blogs', BlogSchema);

module.exports = BlogModel;