const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "acharya.utsav.15@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "acharya.utsav.15@gmail.com",
    subject: "You cancelled! Seriously?",
    text: `May you find better app in the future, ${name}`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
