const passport = require('passport');

module.exports = (app) => {

    // intiate oauth process
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    // authenticate use with the code google oauth provided 
    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
        res.redirect('/surveys');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        // res.send(req.u ser); // this will show blank page just to make sure there is not active user
        res.redirect('/');
    });


    // Github authentication 
    app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

    app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
        res.redirect('/surveys');
    });

    // Twitter authentication
    app.get('/auth/twitter', passport.authenticate('twitter'));

    app.get('/auth/twitter/callback', passport.authenticate('twitter', { successRedirect: '/surveys', failureRedirect: '/login' }));

};