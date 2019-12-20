const passport = require('passport');
const config = require('../config/config');

module.exports = (app) => {

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get(config.GOOGLE_callbackURL, passport.authenticate('google'));

};