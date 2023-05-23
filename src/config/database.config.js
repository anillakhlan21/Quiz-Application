const mongoose = require('mongoose');
require('dotenv').config();
const username = process.env.MONGO_DB_USERNAME
const password = process.env.MONGO_DB_PASSWORD
const cluster = process.env.MONGO_DB_CLUSTER
const dbname = "Quiz";
const dbURI = process.env.MONGO_DB_CLUSTER ? `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority` : `mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}`;

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