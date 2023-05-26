require('dotenv').config()
const { PORT } = process.env
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(PORT, () => {
    console.log(`You are connected to PORT ${PORT} 🔥💰`)
})