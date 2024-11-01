const questionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        required: true,
    },
    correctAnswer: {
        type: String,
        enum: ['yes', 'no'], // Assuming the answers are only "yes" or "no"
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    attemptedBy: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            answer: {
                type: String,
                enum: ['yes', 'no'],
            },
            attemptedAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
