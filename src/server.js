const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(morgan('combined'));
app.use('/authservice', createProxyMiddleware({target: process.env.AUTH_SERVICE_PATH,changeOrigin:true}));
app.use('/bookingservice', createProxyMiddleware({target: process.env.BOOKING_SERVICE_PATH,changeOrigin:true}));
app.use('/flightsandsearch', createProxyMiddleware({target: process.env.FLIGHTS_AND_SEARCH_SERVICE_PATH,changeOrigin:true}));
app.use('/reminderservice', createProxyMiddleware({target: process.env.REMINDER_SERVICE_PATH,changeOrigin:true}));

app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT}`);
});