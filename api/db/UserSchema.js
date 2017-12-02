// Defines our user schema, exports a User model object

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    tel: String,
    metadata: Object,
})

const UserSchema = mongoose.model('yhack2017', UserSchema);

module.exports = Object;