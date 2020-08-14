let startBtn = document.getElementById("beginBtn");
let timeTxt = document.getElementById("time")


// CountDown timer
let secondsLeft = 60;

function timerStart() {
    timeTxt = secondsLeft;
    let timeHandler = setInterval(function() {
        secondsLeft--
        if (secondsLeft < 0) {
            clearInterval(timeHandler);
    
        }
    }, 1000);
};

startBtn.addEventListener("click", function() {
    console.log("Hello from your button!")
    timerStart();
});



