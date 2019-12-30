const sgMail = require('@sendgrid/mail');

const sendgrid_API_key =
  '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';

sgMail.setApiKey(sendgrid_API_key);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'benjamin.brkic.a@gmail.com',
    subject: 'Thanks for joining our app! <3',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
};

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'benjamin.brkic.a@gmail.com',
    subject: `We are very sorry to see you leave, ${name}`,
    text:
      'Is there anything we could have done to keep you? Feel free to reply with feedback.'
  });
};

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail
};
