const applyGlobalMiddleware	= require('./middleware/globalMiddleware.js');

const requestClientIP		= require('./middleware/requestClientIP.js');

const {
	transporter,
	getMailOptions,
}							= require('./nodeMailerConfig.js');

module.exports = {
	// global middleware
	applyGlobalMiddleware,

	// request-ip middleware
	requestClientIP,

	// nodemailer config
	transporter,
	getMailOptions,
};
