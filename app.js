let gameSeq = []; //To Store the Colors sequence given my game;
let userSeq = []; //To Store the Colors sequence entered by user;

let level = 0; //Currently level is zero
let started = false; //Setting Started to False so that game will not be in Started mode in beginning;

//step 1 - We need to start Game when any key is pressed on keyboard;
document.addEventListener("keypress", function () {
  if (started == false) {
    //In the beginning started is set to false so it will start the game and will level up;
    console.log("Game Started");
    started = true;
    levelUp();
  }
});
let h3 = document.querySelector("h3"); //Accessing H3 heading to track level ,to show score;
function levelUp() {
  level++;
  h3.innerText = `Current Level is ${level}`;
}
