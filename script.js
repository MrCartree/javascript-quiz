// declaring global variables
let startBtn = document.getElementById("beginBtn");
let timeTxt = document.getElementById("time");
let questionSpot = document.getElementById("questionSpot");
let answerA = document.getElementById("answerA")
let answerB = document.getElementById("answerB")
let answerC = document.getElementById("answerC")
let answerD = document.getElementById("answerD")

// objects for storing questions and answers
let questions = {
    question1: "What is 2 + 2?",
    question2: "",
    question3: "",
    question4: "",
    question5: ""
};

let answer1 = {
    answerA: "4",
    answerB: "11",
    answerC: "5",
    answerD: "9",
};

// Repopulation of internal stuff
function repop() {
    questionSpot.textContent = questions.question1;
    answerA.textContent = answer1.answerA;
    answerB.textContent = answer1.answerB;
    answerC.textContent = answer1.answerC;
    answerD.textContent = answer1.answerD;
};


// CountDown timer
let secondsLeft = 60;

function timerStart() {
    startBtn.className = "hide";
    let timeHandler = setInterval(function() {
        timeTxt.innerText = "Seconds left: " + secondsLeft;
        secondsLeft--
        if (secondsLeft < 0) {
            clearInterval(timeHandler);
        }
    }, 1000);

};

// Starts the Timer
startBtn.addEventListener("click", function() {
    timerStart();
    repop();
});