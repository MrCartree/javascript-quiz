let startBtn = document.getElementById("beginBtn");
let timeTxt = document.getElementById("time")
let 

// objects for storing questions and answers
const questions = {
    question1: "What is 2 + 2?",
    question2: "",
    question3: "",
    question4: "",
    question5: ""
};

let answer1 = {
    answerA: "4",
    ansewrB: "11",
    ansewrC: "5",
    ansewrD: "9",
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
});