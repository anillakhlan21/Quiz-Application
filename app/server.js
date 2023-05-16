const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const quizRoutes = require('./routes/quiz.router');
const userRoutes = require('./routes/user.router');
const scoreRoutes = require('./routes/score.router');

app.use('/quiz/', quizRoutes);
app.use('/user/', userRoutes);
app.use('/score/', scoreRoutes)


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port no. ${process.env.PORT} ❤️`)
})
