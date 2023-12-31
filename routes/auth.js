const express = require('express'),
	passport = require('passport'),
	authController = require('../controllers/auth');
const router = express.Router();
/* five routes register-get, regester-post, login-get, login-post, logout*/

router.get('/register', authController.showRegisterForm);
router.post('/register', authController.registerUser);
router.get('/login', authController.showLoginForm);
router.post(
	'/login',
	passport.authenticate('local', {
		failureRedirect: '/login',
		failureFlash: true
	}),
	authController.loginUser
);
router.get('/logout', authController.logoutUser);

module.exports = router;
