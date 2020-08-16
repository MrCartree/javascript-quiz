// declaring global variables
let startBtn = document.querySelector("#beginBtn");
let timeTxt = document.querySelector("#time");
let questionAsk = document.querySelector("#questionAsk")
let questionNum = 0
let ulEl = document.querySelector(".ulEl");
let answerEl = document.querySelector("#answerEl")

// objects for storing questions and answers

let qAndA = [
    {
        question: "2 + 2 = ?",
        answer: ["4", "10", "5", "yes"],
        correctA: "4"
    },

    {
        question: "How are you?",
        answer: ["A", "B", "C", "D"],
        correctA: "C"
    },

    {
        question: "This assignment is hard?",
        answer: ["A", "B", "C", "D"],
        correctA: "B"
    },

    {
        question: "question4",
        answer: ["A", "B", "C", "D"],
        correctA: "D"
    },

    {
        question: "This is the final question?",
        answer: ["A", "B", "C", "D"],
        correctA: "A"
    }
];


// displays and appends content
function display() {
    ulEl.className = "show";
    let userQuestion = qAndA[questionNum].question;
    let userAnswer = qAndA[questionNum].answer;
    questionAsk.textContent = userQuestion;
    userAnswer.forEach(function (newQuestion) {
        let listQuestion = document.createElement('li');
        listQuestion.textContent = newQuestion;
        listQuestion.addEventListener("click", function () {

        });
    });
}

// CountDown timer
let secondsLeft = 60;
function timerStart() {
    let timeHandler = setInterval(function () {
        timeTxt.innerText = "Seconds left: " + secondsLeft;
        secondsLeft--
        if (secondsLeft < 0) {
            clearInterval(timeHandler);
        }
    }, 1000);

};

// Hide function
let questionTxt = document.querySelector(".questionTxt");
let pTxt1 = document.querySelector(".pTxt1");
let pTxt2 = document.querySelector(".pTxt2");
let pTxt3 = document.querySelector(".pTxt3");
let pTxt4 = document.querySelector(".pTxt4");

function hide() {
    pTxt1.className = "hide";
    pTxt2.className = "hide";
    pTxt3.className = "hide";
    pTxt4.className = "hide";
    startBtn.className = "hide";
};

// Starts the Timer
startBtn.addEventListener("click", function () {
    timerStart();
    hide();
    display();
});