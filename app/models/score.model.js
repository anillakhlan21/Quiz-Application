const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    quizes: [{
        quizId: {
            type: String,
            require: true,
        },
        score: {
            type: Number,
            require: true,
            default: 0
        }
    }
    ]
})

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;