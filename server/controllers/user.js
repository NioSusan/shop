const User = require('../models/user');
const filterBody = require('../helpers/updateAuth');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const bcrypt = require("bcryptjs");

module.exports = {
    register: (req, res) =>{
        const {username, password} = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        console.log("1")
        User.create({
            username :username,
            password: hash
        })
            .then(newUser=>{
                console.log("2")
                let token = jwt.sign({id: newUser._id, role: newUser.role}, process.env.JWT_SECRET_KEY)
                res.status(201).json({
                    success: true,
                    message: `Account ${newUser.username} registered`,
                    newUser,
                    token
                })
            })
            .catch(err =>{
                console.log(err)
            });
    },

    login: (req, res) => {
        const { username, password } = req.body;
        User.findOne({username : username})
            .then(user => {
                let isTrue = bcrypt.compareSync(password, user.password)
                
                if(isTrue){
                    let token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY)
                    res.status(200).json({
                        msg: `${user.username} is successfully logged in`, 
                        token
                    })
                }else{
                    res.status(400).json({
						mgs: "failed to login"
					});
                }   
            })
            .catch(err=>{
                res.status(400).json({
					msg: "check name and password"
				});
            })

    },

    getUsers : (req, res) =>{
       
    },

    newUser : (req, res) =>{
       
    },

    getUser : (req, res) =>{
        // User.findById(req.params.userId)
        User.findOne({_id: req.params.userId})
        .then(user=>{
            res.status(200).json({
                msg:'success', 
                user,
                
            })
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }, 

    updateUser : (req, res) => {
        let allowedData = filterBody(req.body, ['username'])
        User.findOneAndUpdate({_id: req.params.userId}, allowedData, {new: true})
        .then(updatedUser=>{
            res.status(200).json({
                msg: 'success',
                updatedUser,
                
            })
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }, 

    updateUserRole : (req , res) =>{
        User.findOneAndUpdate({_id: req.params.userId}, {role: req.body.role}, {new: true})
        .then(updatedUser=>{
            res.status(200).json({
                msg: 'success',
                updatedUser,
              
            })
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    },

    deleteUser : (req, res) =>{
        User.remove({_id: req.params.userId})
        .then(()=>{
            res.status(200).json({
                msg : "Successfully deleted!",
                
            })
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }
}