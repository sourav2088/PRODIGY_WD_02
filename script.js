let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let interval;
let running = false;

const displayMilliseconds = document.getElementById('milliseconds');
const displaySeconds = document.getElementById('seconds');
const displayMinutes = document.getElementById('minutes');
const lapList = document.getElementById('lap-list');

function updateDisplay() {
  displayMilliseconds.textContent = milliseconds < 10 ? '0' + milliseconds : milliseconds;
  displaySeconds.textContent = seconds < 10 ? '0' + seconds : seconds;
  displayMinutes.textContent = minutes < 10 ? '0' + minutes : minutes;
}

function startStopwatch() {
  if (!running) {
    running = true;
    interval = setInterval(() => {
      milliseconds += 1;
      if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
      }
      updateDisplay();
    }, 10);
  }
}

function pauseStopwatch() {
  clearInterval(interval);
  running = false;
}

function resetStopwatch() {
  clearInterval(interval);
  running = false;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  updateDisplay();
  lapList.innerHTML = '';
}

function recordLap() {
  if (running) {
    const lapTime = `${displayMinutes.textContent}:${displaySeconds.textContent}:${displayMilliseconds.textContent}`;
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapList.appendChild(lapItem);
  }
}

document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('pause').addEventListener('click', pauseStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);
document.getElementById('lap').addEventListener('click', recordLap);
