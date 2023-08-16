'use strict';

// Selecting elements
const hoursEL = document.getElementById('hours');
const minutesEL = document.getElementById('minutes');
const secondsEL = document.getElementById('seconds');
const stateEL = document.getElementById('ampm');

// Selecting clock
const hourArrow = document.getElementById('hr');
const minuteArrow = document.getElementById('mn');
const secondArrow = document.getElementById('sc');

// Getting today date
const getDate = function () {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return [hours, minutes, seconds];
};

// Showing time
const showTime = function (time) {
  // Clock arrows
  hourArrow.style.transform = `rotateZ(${
    time[0] * 30 + (time[1] * 6) / 12
  }deg)`;
  minuteArrow.style.transform = `rotateZ(${time[1] * 6}deg)`;
  secondArrow.style.transform = `rotateZ(${time[2] * 6}deg)`;

  // Digital clock
  hoursEL.textContent = String(time[0] - 12).padStart(2, 0);
  minutesEL.textContent = String(time[1]).padStart(2, 0);
  secondsEL.textContent = String(time[2]).padStart(2, 0);
  stateEL.textContent = time[0] >= 12 ? 'PM' : 'AM';
};

// Setting date
const setDate = function () {
  let time = getDate();
  showTime(time);
  setInterval(() => {
    showTime(time);
    time = getDate();
  }, 1000);
};

setDate();
