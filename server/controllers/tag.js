const Tag =  require('../models/tag');

module.exports = {
        getTags : (req,res)=>{

        },
        newTag : (req,res)=>{
            const {name} = req.body
            Tag.create({name})
            .then(newTag=>{
                res.status(201).json({
                    success : true,
                    newTag
                })
            })
            .catch(err=>{
                console.log(err)
            })
        },
        getTag : (req,res)=>{

        },

}