const passport = require('passport');
const Strategy = require('passport-http').BasicStrategy;
const User = require('./models/user');

passport.use(new Strategy(
    (username, password, cb) => {
        console.log(username, password);
        User.findOne({username})
            .then(user => {
                if (!user) { return cb(null, false); }
                if (user.password != password) { return cb(null, false); }
                return cb(null, user);
            })
            .catch(error => cb(err));
}));

module.exports = passport;

