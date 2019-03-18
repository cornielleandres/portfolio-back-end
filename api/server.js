const express	= require('express');
const server	= express();
const {
	applyGlobalMiddleware,
	getMailOptions,
	requestClientIP,
	transporter,
}				= require('../config/index.js');

applyGlobalMiddleware(server);

server.post('/send-email', requestClientIP, (req, res) => {
	const mailOptions = getMailOptions(req.body);
	return transporter.sendMail(mailOptions, function(error, info){
		if (error) return res.status(400).json({ error: `Failed to send e-mail: ${ error }` });
		return res.status(201).json({ message: 'Messge sent! I\'ll get back to you ASAP.' });
	});
});

module.exports = server;
