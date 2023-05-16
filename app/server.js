const express = require('express');
require('dotenv').config();
const {
    connectDB,
    userRoutes,
    quizRoutes,
    scoreRoutes,
} = require('../utils/export.util');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/quiz/', quizRoutes);
app.use('/user/', userRoutes);
app.use('/score/', scoreRoutes)

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port no. ${process.env.PORT} ❤️`)
    });
});