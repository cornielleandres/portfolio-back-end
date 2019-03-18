require('dotenv').config();

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	host: process.env.NODEMAILER_HOST,
	port: process.env.NODEMAILER_PORT,
	requireTLS: true,
	auth: {
		user: process.env.NODEMAILER_USER,
		pass: process.env.NODEMAILER_PASS,
	},
});

const getMailOptions = body => {
	const { clientIP, name, email, subject, message } = body;
	const mailOptions = {
		from: '"My Portfolio" <captionthisnoreply@gmail.com>',
		to: 'cornielleandres@gmail.com',
		subject: `Portfolio message - ${ subject }`,
		html: `<table width="100%" border="0" cellpadding="10" cellspacing="0"><tr><td><table border="0" cellpadding="10" cellspacing="0"><tr><td>From: ${ name }</td></tr><tr><td>Email: ${ email }</td></tr><tr><td>Message: ${ message }</td></tr></table></td></tr><tr><td style="text-align: center; font-size: 11px;">This e-mail was sent from IP address ${ clientIP }</td></tr></table></td></tr></table>`,
	};
	return mailOptions;
};

module.exports = {
	transporter,
	getMailOptions,
};
