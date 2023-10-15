const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");
const mili = document.querySelector(".mili");
const capture = document.querySelector(".capture");
const del = document.querySelector(".delete");

let seconds = 0;
let minutes = 0;
let hr = 0;
let milisecond = 0;
let interval;
start.addEventListener("click", () => {
  interval = setInterval(() => {
    milisecond += 1;
    mili.innerHTML = milisecond;
    if (milisecond < 10) {
      mili.innerHTML = "0" + milisecond;
    }
    if (milisecond === 100) {
      milisecond = 0;
      seconds += 1;
      sec.innerHTML = seconds;
      if (seconds < 10) {
        sec.innerHTML = "0" + seconds;
      }
    }
    if (seconds === 60) {
      seconds = 0;
      sec.innerHTML = seconds;
      minutes += 1;
      min.innerHTML = minutes;

      if (minutes < 10) {
        min.innerHTML = "0" + minutes;
      }
    }
    if (minutes === 60) {
      minutes = 0;
      min.innerHTML = minutes;
      hr += 1;
      hour.innerHTML = hr;
      if (hr < 10) {
        hour.innerHTML = "0" + hr;
      }
    }
    if (seconds === 0) {
      sec.innerHTML = "00";
    }
    if (minutes === 0) {
      min.innerHTML = "00";
    }
  }, 10);
  start.disabled = true;
  capture.addEventListener("click", () => {
    const captured = document.querySelector(".captured");
    const h = hour.innerHTML;
    const m = min.innerHTML;
    const s = sec.innerHTML;
    const ms = mili.innerHTML;
    captured.innerHTML += `<li>${h} : ${m} : ${s} : ${ms}</li><br>`;
    del.addEventListener("click", () => {
      captured.innerHTML = "";
    });
  });
});
pause.addEventListener("click", () => {
  clearInterval(interval);
  start.disabled = false;
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  mili.innerHTML = "00";
  sec.innerHTML = "00";
  min.innerHTML = "00";
  hour.innerHTML = "00";
  start.disabled = false;
});
