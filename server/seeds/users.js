const User = require('../models/user');

function addInitialUsers(req,res){
    User.insertMany( [
        { username: "susan", password: '123456', role: "admin"},
        { username: "nio", password:'654321' }
     ] )
     .then(newUsers=>{
         res.status(201).json({
             msg : "successfully adding new users",
             newUsers
         })
     })
     .catch(err=>{
         res.status(500).json({msg:err.message})
     })
}

module.exports = addInitialUsers;