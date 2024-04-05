const formarea = document.querySelector(".form");
const submit = document.querySelector(".btn");
const score = document.querySelector(".score");

var userAnswers = {};
var questionIds = [];

// fetching the questions from server
try{
    fetch("http://localhost:5050/questions")
    .then((res) => {
        return res.json()     
    })
    .then((questions) => {
        // iterating over all questions
        questions.map((curr, index) => {
            //adding a question in the question form
            const contain = document.createElement("div");
            const label = document.createElement("label");
            label.id = curr.id;
            label.textContent = (index+1 + ") ") + curr.question;
            contain.appendChild(label);
            contain.appendChild(document.createElement("br"));
            contain.appendChild(document.createElement("br"));

            questionIds.push(curr.id);
            
            //adding options
            curr.options.map((option) => {
                const radio = document.createElement("input");
                const optionLabel = document.createElement("label");
                optionLabel.textContent = option.id +". "+ option.text;
                radio.type = "radio";
                radio.id = curr.id + option.id;
                radio.setAttribute("name", curr.id);
                optionLabel.setAttribute("for", curr.id + option.id);
                optionLabel.setAttribute("name", curr.id);
                contain.appendChild(radio);
                contain.appendChild(optionLabel);
                contain.appendChild(document.createElement("br"));

                //checking if a option is selected
                radio.addEventListener("change", function(event) {
                    if (event.target.checked) {
                        const ans = event.target.id;
                        const id =  ans.substring(0, ans.length-1);
                        const selOption = ans.substring(ans.length - 1, ans.length);          
                        userAnswers[id] = selOption;
                    }
                });
            })
            const div = document.createElement("div");
            div.className = "div" + curr.id;
            contain.appendChild(document.createElement("br"));
            contain.appendChild(div);
            contain.className = "questionCard";
            formarea.appendChild(contain);
        })
    })
}
catch(e){
    console.log(e);
}

//function shows the score and correct options, called when submit is clicked
function displayResult(){
    // putting the user answers in an array
    var answerArray = []
    for (const key in userAnswers) {
        answerArray.push({
                            id : [key],
                            option :  userAnswers[key]
                        })
    }

    //making request to the server with user's answers
    try{
        fetch("http://localhost:5050/submit", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body:  JSON.stringify({answers: answerArray})
        }).then((res) => {return res.json()})
        .then((correctAnswers) => {
            //marking feedback
            for (const key in userAnswers) {
                if(userAnswers[key] === correctAnswers.correctOptions[key]){
                    const disp = document.querySelector(".div"+key);
                    const answer = correctAnswers.correctOptions[key];
                    disp.innerHTML += "<b> Great! </b>";
                }
                else{
                    const disp = document.querySelector(".div"+key);
                    const answer = correctAnswers.correctOptions[key];
                    disp.innerHTML += "<b>Incorrect, </b>";
                }
            }
            // displaying the correct answers
            questionIds.map((id) => {
                const disp = document.querySelector(".div"+id);
                const answer = correctAnswers.correctOptions[id];
                disp.innerHTML += "<b>The correct option is " + answer + "</b>";
            })
            //display score
            score.innerHTML = "You got <b>" + correctAnswers.score + "</b> out of " + correctAnswers.numberOfQuestions;
        })
    }
    catch(e){
        console.log(e);
    }
}

//checking if the user submits their answers
submit.addEventListener('click', displayResult)
