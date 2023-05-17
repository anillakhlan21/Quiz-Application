const express = require('express');
const connectDB = require('../config/database.config');
const userRoutes = require('./routes/user.router');
const quizRoutes = require('./routes/quiz.router');
const scoreRoutes = require('./routes/score.router');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.use('/user/', userRoutes);
app.use('/quiz/', quizRoutes);
app.use('/score/', scoreRoutes);

app.use((req, res, next) => {
    const error = new Error('Invalid route');
    error.status = 404;
    next(error);
  });
  
  // Error handling middleware
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
    originalUrl: req.originalUrl,
      error: {
        message: err.message,
      },
    });
  });


// connectDB()
connectDB().then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port no. ${process.env.PORT} ❤️`)
    });
})