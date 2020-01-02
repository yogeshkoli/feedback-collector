const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = (app) => {
    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {

        // TODO :: VALIDATE REQUEST   
        const { title, body, subject, recipients } = req.body;

        const survey = new Survey({
            title: title,
            body: body,
            subject: subject,
            _user: req.user._id,
            dateSent: Date.now(),
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
        });

        // send mail
        const mailer = new Mailer(survey, surveyTemplate(survey));

        try {
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            res.send('done');
        } catch (err) {
            res.status(422).send(err);
        }
    });
};