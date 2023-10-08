const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    fullName: {type: String, required: [true, "can't be blank"]},
    email: {type: String, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid']},
    password: {type: String, required: [true, "can't be blank"]}
})


const User = mongoose.model('User',UserSchema);

exports.UserSchema = UserSchema;
exports.User = User;