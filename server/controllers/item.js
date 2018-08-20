const Item = require("../models/item");
const User = require("../models/user");
const Tag = require("../models/tag");

module.exports = {
	getItems: (req, res) => {
		const { id } = req.user;
		Item.find()
			.then(items=>{
				res.status(200).json({
					items
				})
			})
	},

	newItem: (req, res) => {
		const { id } = req.user;
		const {name, price, stock, tags, user} = req.body
		Item.create({
			name: name,
			price, price, 
			stock: stock,
			user: id
		})
		.then(item=>{
			Tag.find({name: tags})
			.then(tags=>{
				Item.findOneAndUpdate({_id: item._id},{ $push: { tags: tags.id} })
					.then(success=>{
						console.log('success',success)
						res.status(201).json({
							item,
							success
						})
					})
					.catch(err=>{
						console.log(err)
					})
			})
			.catch(error=>{
						res.status(400).json({
							error: "You are not authorized to access this API"
						})
					})
		})
		
	},

	getItem: (req, res) => {
		console.log(req.params)
		Item.find({name:req.params.name})
			.then(item=>{
				res.status(200).json({
					item
				})
			})
	},

	updateItem: (req, res) => {},

	deleteItem: (req, res) => {}
};
