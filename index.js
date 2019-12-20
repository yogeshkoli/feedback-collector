const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const config = require('./config/config');

const app = express();

passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: config.GOOGLE_callbackURL
}, (accessToken, refreshToken, profile, cb) => {
    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);
    console.log('profile', profile);
}));

app.get('/', (req, res) => {
    res.send({ hi: 'hello' });
});

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get(config.GOOGLE_callbackURL, passport.authenticate('google'));


const PORT = process.env.PORT || 5000;
app.listen(PORT);
