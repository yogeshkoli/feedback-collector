const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth-routes');
const billingRoutes = require('./routes/billingRoutes');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');

require('./models/User');
require('./services/passport');


async function connectToDb() {
    await mongoose.connect(keys.MONGO_DB_DEV_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

connectToDb().then(console.log('connected to mongo db'));

const app = express();

app.use(express.json());
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.COOKIE_KEY]
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send({ hi: 'hello' });
});

authRoutes(app);
billingRoutes(app);

if (process.env.NODE_ENV === 'production') {
    // making sure that express will serve up the production assets like our main.js file or main.css file.
    app.use(express.static('client/build'));

    // express will serve up index.html file if it does not recognize the route 
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);