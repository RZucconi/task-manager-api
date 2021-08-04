const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'romain.zucconi@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know now you get along with the app.`
  })
}

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'romain.zucconi@gmail.com',
    subject: 'Account cancellation',
    text: `Hi ${name}, your account is delete. Please tell us why you leave!`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
}