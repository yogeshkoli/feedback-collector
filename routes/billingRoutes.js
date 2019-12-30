const keys = require('../config/keys');
const stripe = require('stripe')(keys.STRIPE_SECRET_KEY);

module.exports = (app) => {
    app.post('/api/stripe', async (req, res) => {
        // handle stripe payments 
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: 'Charge for ' + req.user.displayName,
            source: req.body.id
        });

        // TODO
        // add credits to user 

        //  
    });
}