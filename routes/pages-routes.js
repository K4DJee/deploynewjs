const express = require('express');
const router = express.Router();
const {loginPage,registerPage, adminPage} = require('../controllers/pages-controller');

router.get('/register', registerPage);
router.get('/login', loginPage);
router.get('/admin-panel', adminPage);

module.exports = router;