// Timer
const timerStart = document.getElementById('timer_start');
const timerStop = document.getElementById('timer_stop');
const timerReset = document.getElementById('timer_reset');
const timerHours = document.getElementById('timer_hour');
const timerMinutes = document.getElementById('timer_minute');
const timerSeconds = document.getElementById('timer_second');
let defaultHours, defaultMinutes, defaultSeconds;
var timer, totalSeconds;

timerStart.addEventListener('click', () => {
    defaultHours = timerHours.value;
    defaultMinutes = timerMinutes.value;
    defaultSeconds = timerSeconds.value;
    timerStart.disabled = true;
    totalSeconds = parseInt(defaultHours) * 3600 + parseInt(defaultMinutes) * 60 + parseInt(defaultSeconds);
    timer = setInterval(countdown, 1000);
});

timerStop.addEventListener('click', () => {
    clearInterval(timer);
    timerStart.disabled = false;
});

timerReset.addEventListener('click', () => {
    clearInterval(timer);
    setDefault();
});

function setDefault() {
    timerStart.disabled = false;
    timerHours.value = defaultHours;
    timerMinutes.value = defaultMinutes;
    timerSeconds.value = defaultSeconds;
}

function countdown() {
    let hoursRemaining = Math.floor(totalSeconds / 3600);
    let minutesRemaining = Math.floor((totalSeconds % 3600) / 60);
    let secondsRemaining = totalSeconds % 60;

    if (hoursRemaining < 10) {
        hoursRemaining = '0' + hoursRemaining.toString();
    }
    if (minutesRemaining < 10) {
        minutesRemaining = '0' + minutesRemaining.toString();
    }
    if (secondsRemaining < 10) {
        secondsRemaining = '0' + secondsRemaining.toString();
    }

    timerHours.value = `${hoursRemaining}`;
    timerMinutes.value = `${minutesRemaining}`;
    timerSeconds.value = `${secondsRemaining}`;

    if (totalSeconds === 0) {
        console.log('Countdown finished!');
        clearInterval(timer);
        setDefault();
    }
    totalSeconds--;
}