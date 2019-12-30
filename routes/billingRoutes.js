const keys = require('../config/keys');
const stripe = require('stripe')(keys.STRIPE_SECRET_KEY);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
    app.post('/api/stripe', requireLogin, async (req, res) => {

        // handle stripe payments 
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: 'Charge for ' + req.user.displayName,
            source: req.body.id
        });

        //handle credits to the user account 
        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user);
    });
}