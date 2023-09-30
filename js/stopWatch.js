// Stopwatch
const stopwatchTime = document.getElementById('stoptime');
const stopwatchStart = document.getElementById('stopwatch_start');
const stopwatchStop = document.getElementById('stopwatch_stop');
const stopwatchReset = document.getElementById('stopwatch_reset');
let hour = 0, minute = 0, second = 0;
var Interval;

function startCount() {
    second = parseInt(second);
    minute = parseInt(minute);
    hour = parseInt(hour);
    second++;

    if (second === 60) {
        second = 0;
        minute++;
    }
    if (minute === 60) {
        minute = 0;
        hour++;
    }

    if (second < 10) {
        second = '0' + second.toString();
    }
    if (minute < 10) {
        minute = '0' + minute.toString();
    }
    if (hour < 10) {
        hour = '0' + hour.toString();
    }

    stopwatchTime.innerHTML = `${hour}:${minute}:${second}`;
}

stopwatchStart.addEventListener('click', () => {
    Interval = setInterval(startCount, 1000);
    stopwatchStart.disabled = 'true';
})

stopwatchStop.addEventListener('click', () => {
    clearInterval(Interval);
    stopwatchStart.removeAttribute('disabled');
})

stopwatchReset.addEventListener('click', () => {
    clearInterval(Interval);
    stopwatchTime.innerHTML = `00:00:00`;
    stopwatchStart.removeAttribute('disabled');
    hour = 0;
    minute = 0;
    second = 0;
})