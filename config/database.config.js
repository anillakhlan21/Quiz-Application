const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = `mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}`;

const connectDB = async ()=>{
    try{
        await mongoose.connect(dbURI);
        console.log('Connected to Database');
    } catch (err){
        console.log('Database Connection Error: ', err);
        process.exit(1);
    }
}

module.exports = connectDB;