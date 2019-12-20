const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {

    User.findOne({ googleId: profile.id })
        .then(existingUser => {
            if (existingUser) {
                done(null, existingUser);
            }
            else {
                new User({
                    googleId: profile.id,
                    displayName: profile.displayName,
                    name: profile.name,
                    emails: profile.emails,
                    photos: profile.photos,
                    provider: profile.provider
                }).save().then(user => {
                    done(null, user);
                })
            }
        });
}));