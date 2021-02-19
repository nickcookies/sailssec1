const nodemailer = require("nodemailer")
const sendgridTransport = require("nodemailer-sendgrid-transport")
const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key : "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"
    }
}))

