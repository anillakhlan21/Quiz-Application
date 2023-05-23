const express = require('express');
const connectDB = require('./config/database.config');
const quizRouter = require('./routes/quiz.router');
const scoreRouter = require('./routes/score.router');
const userRouter = require('./routes/user.router');


require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(quizRouter)
app.use(scoreRouter)
app.use(userRouter)




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