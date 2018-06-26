const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const server = express();
const secret = "repul a repul a balna";

const corsOptions = {
    origin: 'http://localhost:3000', // allow react to connect, and will have to set up the netlify link here 
    credentials: true // sets the Access-Control-Allow-Credentials CORS header
}

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`server listen on port ${port}`)
})