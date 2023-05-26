require('dotenv').config();
const { PORT } = process.env;
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('./config/connection');
const mineralRouter = require('./Controllers/mineral');


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/mineral', mineralRouter);

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(PORT, () => {
    console.log(`You are connected to PORT ${PORT} 🔥💰`)
})