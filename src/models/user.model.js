const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User;