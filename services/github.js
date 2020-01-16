const passport = require('passport');
const mongoose = require('mongoose');
const GitHubStrategy = require('passport-github2').Strategy;

const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(new GitHubStrategy({
    clientID: keys.GITHUB_CLIENT_ID,
    clientSecret: keys.GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
},
    async (accessToken, refreshToken, profile, done) => {

        const existingUser = await User.findOne({ githubId: profile.id });

        if (existingUser) {
            return done(null, existingUser);
        }
        else {
            const user = await new User({
                githubId: profile.id,
                displayName: profile.displayName,
                name: { firstName: profile.displayName },
                emails: (profile.emails ? profile.emails : null),
                photos: profile.photos,
                provider: profile.provider
            }).save();

            done(null, user);
        }
    }
));