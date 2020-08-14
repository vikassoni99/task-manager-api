const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vikassonix@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Feel free to let us know how you get along with the app.\n\nRegards,\nTeam Task App`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vikassonix@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. We hope to see you back sometime soon.\n\nRegards,\nTeam Task App`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}