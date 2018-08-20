const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required : true,
        unique: true
    },
    password : {
        type: String,
        minlength: 6
    },
    role : {
        type: String,
        default: "user"
    }
}, {timestamps:true});


const User = mongoose.model('User', userSchema);

module.exports = User;