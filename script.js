// declaring global variables
let startBtn = document.querySelector("#beginBtn");
let timeTxt = document.querySelector("#time");
let questionAsk = document.querySelector("#questionAsk")
let questionNum = 0
let ulEl = document.querySelector(".ulEl");
let answerEl = document.querySelector("#answerEl")
let submitHi = document.getElementById("submitToMyWill");

// objects for storing questions and answers

let qAndA = [
    {
        question: "Which built-in method adds one or more elements to the end of an array and returns the new lengths of the array",
        answer: ["last()", "put()", "push()", "None of the above"],
        correctA: "push()"
    },

    {
        question: "Which of the following is an advantage of using JS?",
        answer: ["Less server interaction", "Immediate feedback to the visitors", "Increased interactivity", "All of the above"],
        correctA: "All of the above"
    },

    {
        question: "Which of the following is a valid type of function that JS supports?",
        answer: ["named function", "anonymous funtion", "Both of the above", "None of the above"],
        correctA: "Both of the above"
    },

    {
        question: "Which built-in method returns the string representaiont of the number's value?",
        answer: ["toValue()", "toNumber()", "toString()", "None of the above"],
        correctA: "toString()"
    },

    {
        question: "Who is the baddest of them all?",
        answer: ["Krispy Creme", "Froggy Fresh", "Tyler Cassidy", "All of the above"],
        correctA: "All of the above"
    }
];

// CountDown timer
let secondsLeft = 120;
let timeHandler;
function timerStart() {
    timeHandler = setInterval(function () {
        timeTxt.innerText = "Seconds left: " + secondsLeft;
        secondsLeft--
        if (secondsLeft < 0) {
            clearInterval(timeHandler);
            hide("answerEl");
            document.getElementById("scoresCont").className = ""
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
                    document.getElementById("correctness").textContent = "INCORRECT"
                    secondsLeft -= 10;
                } else {
                    document.getElementById("correctness").textContent = "CORRECT"
                }
                questionNum++;
                if (questionNum === qAndA.length) {
                    clearInterval(timeHandler)
                    hide("answerEl");
                    document.getElementById("scoresCont").className = ""
                } else {
                    display();
                }
            });
        }
    });
}

// On click listener for Submit HS
submitHi.addEventListener("click", function () {
    let initial = document.getElementById("initials")
    const highscores = JSON.parse(localStorage.getItem("highscores") || "[]");
    highscores.push({
        initial: initial.value,
        score: secondsLeft,
    });
    localStorage.setItem('highscores', JSON.stringify(highscores))
    showHi();
});

// show highscore function
function showHi() {
    let scoreList = document.getElementById("scoreList");
    JSON.parse(localStorage.getItem("highscores"))
        .sort(function (left, right) {
            return right.score - left.score;
        })
        .forEach(function (score) {
            let newScore = document.createElement("li");
            newScore.textContent = `${score.initial} - ${score.score}`;
            scoreList.appendChild(newScore);
        });
        document.getElementById("scoresCont").className = ""
}

// show hi button
document.getElementById("highscoreTxt").addEventListener("click", function() {
    showHi();
    hide("introCont");
    answerEl.textContent = ""
});

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