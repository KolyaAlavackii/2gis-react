const router = require('express').Router();
const checkUser = require('../middlewares/checkUser');

router.use(checkUser);

router.get('/', (req, res, next) => {
    res.send({markers: req.user.markers});
});

router.post('/', (req, res, next) => {
    req.user.markers = req.body.markers;
    req.user.save()
    .then(() => res.send({status: 'ok'}))
    .catch(error => console.log(error));
});

module.exports = router;