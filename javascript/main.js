const defaultTimeInSeconds = 1500;
const bell = new Audio('/assets/bell.mp3');
let remainingTime = defaultTimeInSeconds;
let intervalId;

document.addEventListener('DOMContentLoaded', () => {
  setTimer(defaultTimeInSeconds);
  document.querySelector('#start-btn').addEventListener('click', start);
  document.querySelector('#stop-btn').addEventListener('click', stop);
});

function start() {
  intervalId = setInterval(decrease, 1000);

  toggleTimerButton();
}

function stop() {
  remainingTime = defaultTimeInSeconds;
  
  clearInterval(intervalId);
  setTimer(remainingTime);
  toggleTimerButton();
}

function decrease() {
  remainingTime -= 1;
  
  setTimer(remainingTime);

  if (remainingTime < 0) {
    stop();
    bell.play();
  }
}

function setTimer(timeInSeconds) {
  const timeObj = calcTime(timeInSeconds);
  const minutes = timeObj.minutes;
  const seconds = timeObj.seconds;

  document.querySelector('#minutes').innerHTML = minutes >= 10 ? minutes : `0${minutes}`;
  document.querySelector('#seconds').innerHTML = seconds >= 10 ? seconds : `0${seconds}`;
}

function toggleTimerButton() {
  const startBtn = document.querySelector('#start-btn');
  const stopBtn = document.querySelector('#stop-btn');

  if (startBtn.style.display === 'none') {
    startBtn.style.display = 'inline-block';
    stopBtn.style.display = 'none';
  } else {
    startBtn.style.display = 'none';
    stopBtn.style.display = 'inline-block';
  }
}

function calcTime(timeInSeconds) {
  const minutes = parseInt(timeInSeconds / 60);
  const seconds = Math.round((timeInSeconds / 60 - parseInt(timeInSeconds / 60)) * 60);

  return {
    minutes: minutes,
    seconds: seconds,
  };
}