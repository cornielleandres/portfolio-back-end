require('dotenv').config();

const nodemailer = require('nodemailer');

const host = process.env.NODEMAILER_HOST;
const port = process.env.NODEMAILER_PORT;
const user = process.env.NODEMAILER_USER;
const pass = process.env.NODEMAILER_PASS;
const adminUser = process.env.NODEMAILER_ADMIN_USER;

// const transporter = nodemailer.createTransport({
// 	host,
// 	port,
// 	requireTLS: true,
// 	auth: { user, pass },
// });
const transporter = nodemailer.createTransport({
	service: 'hotmail',
	auth: { user, pass },
});

const getMailOptions = body => {
	const { clientIP, name, email, subject, message } = body;
	const mailOptions = {
		from: user,
		to: adminUser,
		subject: `Portfolio message - ${ subject }`,
		html: `<table width="100%" border="0" cellpadding="10" cellspacing="0"><tr><td><table border="0" cellpadding="10" cellspacing="0"><tr><td>From: ${ name }</td></tr><tr><td>Email: ${ email }</td></tr><tr><td>Message: ${ message }</td></tr></table></td></tr><tr><td style="text-align: center; font-size: 11px;">This e-mail was sent from IP address ${ clientIP }</td></tr></table></td></tr></table>`,
	};
	return mailOptions;
};

module.exports = {
	transporter,
	getMailOptions,
};
