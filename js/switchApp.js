// Swith App
const displayApp = document.querySelectorAll('section');
const switchButton = document.querySelectorAll('li.app-show');
const savedApp = localStorage.getItem('app');
var button;

if (savedApp) {
    setApp(savedApp);
}

switchButton.forEach(item => {
    item.addEventListener('click', event => {
        button = setButton(event);
        setApp(button.classList[0]);
    })
})

function setButton(event) {
    if (event.target.tagName === 'I' || event.target.tagName === 'P') {
        return event.target.parentElement;
    } else if (event.target.tagName === 'LI') {
        return event.target;
    }
}

function toggleButton(button) {
    switchButton.forEach(item => {
        if (item.classList.contains(button)) {
            item.classList.add('toggle');
        } else {
            item.classList.remove('toggle');
        }
    })
}

function showApp(app) {
    displayApp.forEach(item => {
        if (item.id === app) {
            item.classList.remove('invsible');
        } else {
            item.classList.add('invsible');
        }
    })
}

function setApp(button) {
    if (button === 'clock') {
        showApp('clock');
        saveApp('clock');
    } else if (button === 'stopwatch') {
        showApp('stopwatch');
        saveApp('stopwatch');
    } else if (button === 'timer') {
        showApp('timer');
        saveApp('timer');
    }
    toggleButton(button);
}

function saveApp(app) {
    localStorage.setItem('app', app);
}