// declaring global variables
let startBtn = document.querySelector("#beginBtn");
let timeTxt = document.querySelector("#time");

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

// Element creation/appending
// let createQ = document.createElement("h5");
// let createUl = document.createElement("ul");
// createQ.append("#cardBody")

// displays and appends content
function display() {
    for (let i = 0; i < qAndA.length; i++) {
        let userQuestion = qAndA[i].question
        let userAnswer = qAndA[i].answer
        createQ.textContent = userQuestion
    }
}

// CountDown timer
let secondsLeft = 60;
function timerStart() {
    let timeHandler = setInterval(function() {
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
    questionTxt.className = "hide";
    pTxt1.className = "hide";
    pTxt2.className = "hide";
    pTxt3.className = "hide";
    pTxt4.className = "hide";
    startBtn.className = "hide";
};

// Starts the Timer
startBtn.addEventListener("click", function() {
    timerStart();
    // hide();
    display();
});