const express  = require('express');
const cors = require('cors');
const { questions, correctOptions } = require('./question_data.js');

const app = express();
app.use(cors());
app.use(express.json());

//endpoint to ge the question
app.get('/questions', (req, res) => {
    res.json(questions);
})

//endpoint for submitting the question and getting score and corect options
app.post('/submit', (req, res) => {
    console.log(req.body);
    //getting the users answers in the request
    const answers = req.body.answers;
    let score = 0;
    //calculating the score by comparing with correct options
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].option === correctOptions[answers[i].id]) {
            score++;
        }
    }
    //sending the score and correct options
    res.json({
                "score" : score,
                "correctOptions" : correctOptions,
                "numberOfQuestions" : 10
            });
})

app.listen(5050, ()=>{
    console.log("listening to port 5000");
});