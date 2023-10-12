const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");

let seconds = 0;
let minutes = 0;
let hr = 0;

let interval;
start.addEventListener("click", () => {
  interval = setInterval(() => {
    seconds += 1;
    sec.innerHTML = seconds;
    if (seconds === 60) {
      seconds = 0;
      sec.innerHTML = seconds;
      minutes += 1;
      min.innerHTML = minutes;
    }
    if (minutes === 60) {
      minutes = 0;
      min.innerHTML = minutes;
      hr += 1;
      hour.innerHTML = hr;
    }
  }, 1000);
  start.disabled = true;
});
pause.addEventListener("click", () => {
  clearInterval(interval);
  start.disabled = false;
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hr = 0;
  sec.innerHTML = "00";
  min.innerHTML = "00";
  hour.innerHTML = "00";
  start.disabled = false;
});
