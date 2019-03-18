require('dotenv').config();
const express		= require('express');
const cors			= require('cors');
const helmet		= require('helmet');
const morgan		= require('morgan');

const frontendURL	= process.env.FRONTEND_URL;

const enableCors = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,POST');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
};

const corsOptions = {
	origin: function (origin, callback) {
		if (origin === frontendURL || !origin) callback(null, true);
		else callback(new Error('Not allowed by CORS'));
	},
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

module.exports = (server) => {
	server.use(
		express.json(),
		enableCors,
		cors(corsOptions),
		helmet(),
		morgan('dev'),
	);
};
