const router = require('express').Router();
const {getItems, newItem, getItem, updateItem, deleteItem} = require('../controllers/item');
const isLogin =  require('../helpers/isLogin');
const auth =  require('../helpers/auth');

const authUser  = auth(['user', 'admin'])
const authAdmin = auth(['admin'])

router.get('/items', isLogin, authUser, getItems);
router.post('/items', isLogin, authUser, newItem);
router.get('/items/:name',isLogin, authUser, getItem);
router.put('/items/:id',isLogin, authUser, updateItem);
router.delete('/items/:id',isLogin, authUser, deleteItem);

module.exports = router;