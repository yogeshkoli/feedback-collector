const keys = require('../config/keys');
const sgMail = require('@sendgrid/mail');

class Mailer {
    constructor({ subject, recipients }, content) {
        sgMail.setApiKey(keys.SENDGRID_KEY);

        this.msg = {
            personalizations: this.formatAddresses(recipients, subject),
            from: 'no-reply@example.com',
            html: content,
        };
    }

    formatAddresses(recipients, subject) {
        return recipients.map(({ email }) => {
            return ({ to: [{ email: email }], subject: subject });
        });
    }

    async send() {
        return await sgMail.send(this.msg);
    }
}

module.exports = Mailer;