const router = require('express').Router();
const checkUser = require('../middlewares/checkUser');

router.use(checkUser);

router.post('/', (req, res, next) => {
    res.send(req.body);
});

module.exports = router;