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
  menuPositions.forEach( el => document.querySelector(el).hidden = true);
  document.querySelector(menuPositions[currIdx]).hidden = false;
  const nextIdx = currIdx + 1 > menuPositions.length - 1 ? 0 : currIdx + 1;
  document.querySelector(menuPositions[nextIdx]).hidden = false;
  const afterNext = nextIdx + 1 > menuPositions.length - 1 ? 0 : nextIdx + 1;
  document.querySelector(menuPositions[afterNext]).hidden = false;
}

showCurrent ();

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
