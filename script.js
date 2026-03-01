
let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;
// let lapCount = 0;

function timeToString(time) {
    let hrs = Math.floor(time / 3600000);
    let mins = Math.floor((time % 3600000) / 60000);
    let secs = Math.floor((time % 60000) / 1000);

    return (
        (hrs < 10 ? "0" + hrs : hrs) + ":" +
        (mins < 10 ? "0" + mins : mins) + ":" +
        (secs < 10 ? "0" + secs : secs)
    );
}

function start() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function () {
            elapsedTime = Date.now() - startTime;
            document.getElementById("display").textContent = timeToString(elapsedTime);
        }, 1000);
        running = true;
    }
}



function restart() {
    clearInterval(timerInterval);   
    elapsedTime = 0;                
    startTime = Date.now();         

    timerInterval = setInterval(function () {
        elapsedTime = Date.now() - startTime;
        document.getElementById("display").textContent = timeToString(elapsedTime);
    }, 1000);
    running = true;
}



function pause() {
    clearInterval(timerInterval);
    running = false;
}


function reset() {
    clearInterval(timerInterval);
    document.getElementById("display").textContent = "00:00:00";
    elapsedTime = 0;
    running = false;
}




