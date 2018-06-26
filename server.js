const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const server = express();
const secret = "repul a repul a balna";

const corsOptions = {
    origin: 'http://localhost:3000', // allow react to connect, and will have to set up the netlify link here 
    credentials: true // sets the Access-Control-Allow-Credentials CORS header
}


server.use(express.json());
server.use(cors(corsOptions));



const port = process.env.PORT || 5000;

server.get('/', (req,res) => {
    res.status(200).json('api connected')
})

server.listen(port, () => {
    console.log(`server listen on port ${port}`)
})

mongoose
    .connect('mongodb://csaba:Csaba123@ds018538.mlab.com:18538/hiccupsteahouse')
    .then(() => {
        console.log('\n CONNECTED TO THE DATABASE')
    })
    .catch(err => console.log(
        
        "ERROR CONNECTING TO THE DATABASE", err
    ))