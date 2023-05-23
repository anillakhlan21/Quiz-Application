const express = require('express');
const quizController = require('../controllers/quiz.controller')

const router = express.Router();

router.get('/getQuizById/:id', quizController.getQuizById)

router.get('/getRandomQuiz', quizController.getRandomQuiz)

router.post('/createNewQuiz', quizController.createNewQuiz)

router.put('/updateQuizById/:id', quizController.updateQuizById)

router.delete('/deleteQuizById/:id', quizController.deleteQuizById)

module.exports = router;