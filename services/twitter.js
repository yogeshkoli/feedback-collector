const passport = require('passport');
const mongoose = require('mongoose');
const TwitterStrategy = require('passport-twitter').Strategy;

const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(new TwitterStrategy({
    consumerKey: keys.TWITTER_CONSUMER_KEY,
    consumerSecret: keys.TWITTER_CONSUMER_SECRET,
    callbackURL: "/auth/twitter/callback"
},
    async (token, tokenSecret, profile, done) => {
        const existingUser = await User.findOne({ twitterId: profile.id });

        if (existingUser) {
            return done(null, existingUser);
        }
        else {
            const user = await new User({
                twitterId: profile.id,
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