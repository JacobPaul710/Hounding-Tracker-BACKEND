require('dotenv').config();
const { PORT } = process.env;
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('./config/connection');
const mineralController = require('./controllers/mineral');


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/mineral', mineralController);


app.listen(PORT, () => {
    console.log(`You are connected to PORT ${PORT} 🔥💰`)
})