// Controllers
const userController = require('../app/controllers/user.controller');
const quizController = require('../app/controllers/quiz.controller');
const scoreController = require('../app/controllers/score.controller');

// Models
const userModel = require('../app/models/user.model');
const quizModel = require('../app/models/quiz.model');
const scoreModel = require('../app/models/score.model');

// Routes
const userRoutes = require('../app/routes/user.router');
const quizRoutes = require('../app/routes/quiz.router');
const scoreRoutes = require('../app/routes/score.router');

// Database Connection
const connectDB = require('../config/database.config');



module.exports = {
    userController,
    quizController,
    scoreController,
    userModel,
    quizModel,
    scoreModel,
    userRoutes,
    quizRoutes,
    scoreRoutes,
    connectDB
}