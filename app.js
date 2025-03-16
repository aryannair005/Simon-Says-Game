let gameSeq = []; //To Store the Colors sequence given my game;
let userSeq = []; //To Store the Colors sequence entered by user;

let level = 0; //Currently level is zero
let started = false; //Setting Started to False so that game will not be in Started mode in beginning;
let btns = ["red", "green", "blue", "yellow"];

// We need to start Game when any key is pressed on keyboard;
document.addEventListener("keypress", function () {
  if (started == false) {
    //In the beginning started is set to false so it will start the game and will level up;
    console.log("Game Started");
    started = true;
    levelUp();
  }
});

//Flashing btn Function by Game
function gameFlash(btn) {
  btn.classList.add("flashGame"); //Adding flashing class
  setTimeout(() => {
    btn.classList.remove("flashGame"); //this setTimeout function Will remove the flashLight after flashing
  }, 250);
}

//Flashing btn Function by user
function userFlash(btn) {
  btn.classList.add("flashUser"); //Adding flashing class
  setTimeout(() => {
    btn.classList.remove("flashUser"); //this setTimeout function Will remove the flashLight after flashing
  }, 250);
}

let h3 = document.querySelector("h3"); //Accessing H3 heading to track level ,to show score;
function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Current Level is ${level}`;
  let randIdx = Math.floor(Math.random() * 4); //From this line taking a random Index to iterate and access the btns;
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.innerHTML = `Game Over.Your Score is ${level}`;
    resetGame();
  }
}

// this function will take btn when btn is pressed and push it into user sequence;
function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}
//This will select all the buttons and add event listener when btn is pressed by user;
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function resetGame() {
  level = 0;
  started = false;
  gameSeq = [];
  userSeq = [];
  let body = document.querySelector("body");
  body.classList.add("blink");
  setTimeout(() => {
    body.classList.remove("blink");
  }, 100);
}
