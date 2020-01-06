const regularExpress = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
    const invalidEmails = emails
        .split(' ')
        .map(email => email.trim())
        .filter(email => regularExpress.test(email) === false);

    if (invalidEmails.length) {
        return `${invalidEmails.length === 1 ? 'This email is: ' : 'These emails are invalid: '} ${invalidEmails}`;
    }

    return;
};