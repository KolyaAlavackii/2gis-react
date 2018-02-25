const auth = require('../auth');

module.exports = auth.authenticate('basic', { session: false });