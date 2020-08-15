let startBtn = document.getElementById("beginBtn");
let timeTxt = document.getElementById("time")


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



