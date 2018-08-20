const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    price : {
        type: Number,
        default: 0,
        required : true
       
    },
    stock : {
        type: Number,
        default: 0
    },
    tags : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Tag"
    }],
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
}, {timestamps:true});


const Item = mongoose.model('Item', itemSchema);

module.exports = Item;