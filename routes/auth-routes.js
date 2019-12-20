const passport = require('passport');
const config = require('../config/config');

module.exports = (app) => {

    // intiate oauth process
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    // authenticate use with the code google oauth provided 
    app.get(config.GOOGLE_callbackURL, passport.authenticate('google'), (req, res) => {
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

};