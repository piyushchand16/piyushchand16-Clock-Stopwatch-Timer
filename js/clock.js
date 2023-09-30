// Clock
function showNow() {
    const nowTime = new Date();
    const showNowDate = document.getElementById('now_date');
    const showNowTime = document.getElementById('now_time');
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let hours, minutes, seconds;
    if (nowTime.getHours() < 10) {
        hours = '0' + nowTime.getHours().toString();
    } else {
        hours = nowTime.getHours();
    }
    if (nowTime.getMinutes() < 10) {
        minutes = '0' + nowTime.getMinutes().toString();
    } else {
        minutes = nowTime.getMinutes();
    }
    if (nowTime.getSeconds() < 10) {
        seconds = '0' + nowTime.getSeconds().toString();
    } else {
        seconds = nowTime.getSeconds();
    }

    showNowDate.innerHTML = `${nowTime.getDate()} ${monthNames[nowTime.getMonth()]} ${nowTime.getFullYear()}`;
    showNowTime.innerHTML = `${hours}:${minutes}:${seconds}`;
}
showNow();
setInterval(showNow, 1000);