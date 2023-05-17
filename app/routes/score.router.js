const express = require('express');
const scoreController = require('../controllers/score.controller');


const router = express.Router();

router.get('getScoreByUserId/:userId', scoreController.getScoreByUserId);

router.put('updateUserScore/:userId', scoreController.updateUserScore);

module.exports = router;