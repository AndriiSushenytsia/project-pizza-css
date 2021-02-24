const menuPositions = [
  "#menu-first",
  "#menu-second",
  "#menu-third",
  "#menu-forth",
  "#menu-fifth",
  "#menu-sixth",
];

let currIdx = 0;

function showCurrent() {
  menuPositions.forEach((el) => (document.querySelector(el).hidden = true));
  if (window.screen.width < 550) {
    document.querySelector(menuPositions[currIdx]).hidden = false;
  } else if (window.screen.width < 825) {
    document.querySelector(menuPositions[currIdx]).hidden = false;
    const nextIdx = currIdx + 1 > menuPositions.length - 1 ? 0 : currIdx + 1;
    document.querySelector(menuPositions[nextIdx]).hidden = false;
  } else {
    document.querySelector(menuPositions[currIdx]).hidden = false;
    const nextIdx = currIdx + 1 > menuPositions.length - 1 ? 0 : currIdx + 1;
    document.querySelector(menuPositions[nextIdx]).hidden = false;
    const afterNext = nextIdx + 1 > menuPositions.length - 1 ? 0 : nextIdx + 1;
    document.querySelector(menuPositions[afterNext]).hidden = false;
  }
}

showCurrent();

function prevMenu() {
  currIdx--;
  if (currIdx < 0) currIdx = menuPositions.length - 1;
  showCurrent();
}

function nextMenu() {
  currIdx++;
  if (currIdx >= menuPositions.length) currIdx = 0;
  showCurrent();
}

document.querySelector(".prevbutton").addEventListener("click", prevMenu);
document.querySelector(".nextbutton").addEventListener("click", nextMenu);

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`March 25 ${currentYear} 00:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(updateCountdown, 1000);
