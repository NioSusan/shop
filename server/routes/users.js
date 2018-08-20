const router = require('express').Router();
const auth      = require('../helpers/auth');
const isLogin = require('../helpers/isLogin');
const {register, login, getUsers, getUser, updateUser, updateUserRole, deleteUser} = require('../controllers/user');

const authUser  = auth(['user', 'admin'])
const authAdmin = auth(['admin'])

router.post('/register', register);
router.post('/signin', login);
router.get('/users', isLogin, authUser, getUsers);
router.get('/users/:userId', isLogin, authUser, getUser);
router.put('/users/:userId', isLogin, authUser, updateUser);
router.patch('/users/:userId', isLogin, authAdmin, updateUserRole);
router.delete('/users/:userId', isLogin, authAdmin, deleteUser);

module.exports = router;
