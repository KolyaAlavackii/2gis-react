const router = require('express').Router();
const basicAuth = require('../middlewares/basicAuth');
const login = require('./login');
const markers = require('./markers');

router.use(basicAuth);
router.use('/login', login);
router.use('/markers', markers);

module.exports = router;
