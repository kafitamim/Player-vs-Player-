//Player vs Player -

//select all elements from html using querySelector.

const playingToBtn = document.querySelector(".playingTo");
const form = document.querySelector("form");
const inputElm = document.querySelector("#inputScore");
const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const resetBtn = document.querySelector("#resetBtn");
const player1Won = document.querySelector(".player1Won");
const player2Won = document.querySelector(".player2Won");
const resetAllBtn = document.querySelector("#resetAllBtn");

//initialize values.

let winningValue = 5;
let p1ScoreValue = 0;
let p2ScoreValue = 0;
let playersInArray = ["p1", "p2"];
let playStart = playersInArray[Math.floor(Math.random() * 2)];
let gameOver = false;
let player1WonScore = 0;
let player2WonScore = 0;

//add winning value with playingToBtn
playingToBtn.textContent = winningValue;

function inputValidation(score) {
  if (score < 1) {
    alert("please provide value greater than zero!");
  }
}

//set Event listener submit in form element.
form.addEventListener("submit", (evet) => {
  evet.preventDefault();
  const getInputValue = +inputElm.value;
  inputValidation(getInputValue);
  playingToBtn.textContent = getInputValue;
  winningValue = getInputValue;
  inputElm.value = "";
});

function disableButton(buttonSelection1, buttonSelection2, playerMove) {
  buttonSelection1.setAttribute("disable", "disable");
  buttonSelection2.setAttribute("disable", "disable");
  buttonSelection1.removeAttribute("disable");
  buttonSelection2.removeAttribute("disable");
  playStart = playerMove;
}

// create a game over function which check the current value and turn gameover into true and show the winner through alert. and  disable players buttons.
function gameOverFunc() {
  if (p1ScoreValue === winningValue) {
    gameOver = true;
    p2Btn.setAttribute("disable", "disable");
    player1WonScore++;
    player1Won.textContent = player1WonScore;
    alert("player-1 won the match");
  } else if (p2ScoreValue === winningValue) {
    gameOver = true;
    p1Btn.setAttribute("disable", "disable");
    player2WonScore++;
    player2Won.textContent = player2WonScore;
    alert("player-2 won the match");
  }
}

// set event listener to the p1 button and check some conditions. if conditions is true then it increase the value of p1 score. call disable button function and also gameover function.
p1Btn.addEventListener("click", (evtp1) => {
  if (!gameOver && playStart == "p1" && p1ScoreValue < winningValue) {
    p1ScoreValue++;
    p1Score.textContent = p1ScoreValue;
    disableButton(p1Btn, p2Btn, "p2");
    gameOverFunc();
  }
});

// p2Btn value set and connect with playing btn then increase according to the winning value range.
p2Btn.addEventListener("click", (evtp2) => {
  if (!gameOver && playStart == "p2" && p2ScoreValue < winningValue) {
    p2ScoreValue++;
    p2Score.textContent = p2ScoreValue;
    disableButton(p2Btn, p1Btn, "p1");
    gameOverFunc();
  }
});

resetBtn.addEventListener("click", (evnt) => {
  p1ScoreValue = 0;
  p2ScoreValue = 0;
  p1Score.textContent = p1ScoreValue;
  p2Score.textContent = p2ScoreValue;
  disableButton(p1Btn, p2Btn, "p2");
  disableButton(p2Btn, p1Btn, "p1");
  playStart = playersInArray[Math.floor(Math.random() * 2)];
  gameOver = false;
});

//Reset All
resetAllBtn.addEventListener("click", (evtlist) => {
  winningValue = 5;
  p1ScoreValue = 0;
  p2ScoreValue = 0;
  let player1WonScore = 0;
  let player2WonScore = 0;
  p1Score.textContent = p1ScoreValue;
  p2Score.textContent = p2ScoreValue;
  playingToBtn.textContent = winningValue;
  disableButton(p1Btn, p2Btn, "p2");
  disableButton(p2Btn, p1Btn, "p1");
  playStart = playersInArray[Math.floor(Math.random() * 2)];
  gameOver = false;
  player1Won.textContent = player1WonScore;
  player2Won.textContent = player2WonScore;
});
