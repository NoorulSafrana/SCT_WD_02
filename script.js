let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

const timeDisplay = document.getElementById('time');
const buttons = document.querySelectorAll('.changeColor');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

function updateTime()
{
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let h = Math.floor(elapsedTime / (1000 * 60 * 60));
    let m = Math.floor(elapsedTime / (1000 * 60) % 60);
    let s = Math.floor(elapsedTime / 1000 % 60);
    let ms = Math.floor(elapsedTime % 1000 / 10); 

    h = String(h).padStart(2, "0");
    m = String(m).padStart(2, "0");
    s = String(s).padStart(2, "0");
    ms = String(ms).padStart(2, "0");

    timeDisplay.textContent = `${h}:${m}:${s}:${ms}`;
}

function resetButtons() {
  buttons.forEach(button => button.classList.remove('active'));
}

startButton.addEventListener('click', () => {
  resetButtons();
  startButton.classList.add('active');
  
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 100);
  }
});

stopButton.addEventListener('click', () => {
  resetButtons();
  stopButton.classList.add('active');
  
  clearInterval(timerInterval);
  timerInterval = null;
});

resetButton.addEventListener('click', () => {
  resetButtons();
  resetButton.classList.add('active');
  
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  timeDisplay.textContent = '00:00:00:00';
});