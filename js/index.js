const menuPositions = [
  "#menu-first",
  "#menu-second",
  "#menu-third",
  "#menu-forth",
  "#menu-fifth",
  "#menu-sixth",
];

let x = 0;
let y = x + 1;
let z = y + 1;

const menuPosX = document.querySelector(menuPositions[x]);
const menuPosY = document.querySelector(menuPositions[y]);
const menuPosZ = document.querySelector(menuPositions[z]);

menuPosX.hidden = true;
menuPosY.hidden = true;
menuPosZ.hidden = true;


function nextMenu() {
  
}

function prevMenu() {
    
}

document.querySelector('.prevbutton').addEventListener('click', prevMenu);
document.querySelector('.nextbutton').addEventListener('click', nextMenu);

