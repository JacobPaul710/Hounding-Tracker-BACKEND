require('dotenv').config();
const { MONGODB_URI } = process.env
const mongoose = require('mongoose');

mongoose.connect(MONGODB_URI);

mongoose.connection
    .on('open', () => console.log('Mongoose is connected to the database 📀👨‍💻'))
    .on('close', () => console.log('Mongoose is disconnected from the database ⚡️🔌'))
    .on('error', (error) => console.log('Mongoose has encountered an error! 🚫', error))

    module.exports = mongoose;