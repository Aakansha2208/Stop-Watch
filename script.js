let startTime;
let timer;
let isRunning = false;
let elapsedTime = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStop").innerText = "Start";
  } else {
    startTime = Date.now() - elapsedTime * 1000;
    timer = setInterval(updateTime, 100);
    document.getElementById("startStop").innerText = "Stop";
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  document.getElementById("startStop").innerText = "Start";
  updateTime();
}

function updateTime() {
  const currentTime = Date.now();
  elapsedTime = Math.floor((currentTime - startTime) / 1000);
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;
  const display = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById("display").innerText = display;
}

document.getElementById("startStop").addEventListener("click", startStop);
document.getElementById("reset").addEventListener("click", reset);
