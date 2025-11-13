let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time")

function padStart(value){ // this is to add a zero in front of a number so as long as the digit isn't 2 numbers long.
    return String(value).padStart(2, "0") 
}

function setTime(){ // this is needed to actually update the timer on the user's end
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60 // this is to allow for the remainder after division by 60 to show the seconds we have accrued past the minute mark
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`; // this helps keep the format kind of but it still needs help with padding the extra zeros when single digits are shown
}

function timer(){
    secondsElapsed++; // variable++ is similar to variable+=1, or variable = variable +1
    setTime()
}

function startClock() {
    if (interval) stopClock()
    interval = setInterval(timer,1000) // we set the variable of how the stopwatch increments over time. in this case we are using 1000ms to determine 1 second
}

function stopClock() { // this just stops the counting from the starClock function
    clearInterval(interval)
}

function resetClock() {
    stopClock()
    secondsElapsed = 0;
    setTime()
}