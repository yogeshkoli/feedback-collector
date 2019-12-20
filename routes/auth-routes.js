const passport = require('passport');

module.exports = (app) => {

    // intiate oauth process
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    // authenticate use with the code google oauth provided 
    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user); // this will show blank page just to make sure there is not active user
    });

};