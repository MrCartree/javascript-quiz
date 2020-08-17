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

// CountDown timer
let secondsLeft = 120;
function timerStart() {
    let timeHandler = setInterval(function () {
        timeTxt.innerText = "Seconds left: " + secondsLeft;
        secondsLeft--
        if (secondsLeft < 0) {
            clearInterval(timeHandler);
        }
    }, 1000);

};

// displays and appends content
function display() {
    const listEl = document.querySelectorAll("li");
    ulEl.className = "show";
    const currentQuestion = qAndA[questionNum];
    questionAsk.textContent = currentQuestion.question;
    currentQuestion.answer.forEach(function (userChoice, index) {
        let listQuestion = listEl[index];
        listQuestion.textContent = userChoice;
        if (questionNum === 0) {
            listQuestion.addEventListener("click", function () {
                if (userChoice !== currentQuestion.correctA) {
                    secondsLeft -= 10;
                }
                questionNum++;
                if (questionNum === qAndA.length) {
                    hide("answerEl");
                } else {
                    display();
                }
            });
        }
    });
}

// Hide function
function hide(id) {
    document.getElementById(id).className = "hide";
};

// Starts the Timer
startBtn.addEventListener("click", function () {
    timerStart();
    hide("introCont");
    display();
});