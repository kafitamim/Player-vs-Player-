//Player vs Player -

//select all elements from html

const playingToBtn = document.querySelector(".playingTo");
const form = document.querySelector("form");
const inputElm = document.querySelector("#inputScore");
const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const resetBtn = document.querySelector("#resetBtn");

//values

let winningValue = 5;
let p1ScoreValue = 0;
let p2ScoreValue = 0;
let playStart = "p1";
let gameOver = false;

// console.log(form)

////
//add winning value with playingToBtn
playingToBtn.textContent = winningValue;

form.addEventListener("submit", (evet) => {
  evet.preventDefault();
  let getInputValue = inputElm.value;
  console.log(getInputValue);
  playingToBtn.textContent = getInputValue;
  winningValue = getInputValue;
  inputElm.value = "";
});

function gameOverFunc() {
  if (p1ScoreValue > winningValue) {
    alert("player-1 won the match");
  } else if (p2ScoreValue > winningValue) {
    alert("player-2 won the match");
  }
}

function disableButton(buttonSelection1, buttonSelection2, playerMove) {
  buttonSelection1.setAttribute("disable", "disable");
  buttonSelection2.removeAttribute("disable");
  playStart = playerMove;
}

// p1Btn value set and connect with playing btn then increase according to the winning value range.
p1Btn.addEventListener("click", (evtp1) => {
  if (!gameOver && playStart == "p1" && p1ScoreValue <= winningValue) {
    p1Score.textContent = p1ScoreValue++;
    gameOverFunc();
    disableButton(p1Btn, p2Btn, "p2");
  }
});

// p2Btn value set and connect with playing btn then increase according to the winning value range.
p2Btn.addEventListener("click", (evtp1) => {
  if (!gameOver && playStart == "p2" && p2ScoreValue <= winningValue) {
    p2Score.textContent = p2ScoreValue++;
    gameOverFunc();

    disableButton(p2Btn, p1Btn, "p1");
  }
});

resetBtn.addEventListener("click", (evnt) => {
  winningValue = 5;
  p1ScoreValue = 0;
  p2ScoreValue = 0;

  p1Score.textContent = p1ScoreValue;
  p2Score.textContent = p2ScoreValue;
  playingToBtn.textContent = winningValue;
  disableButton(p1Btn, p2Btn, "p2");
  disableButton(p2Btn, p1Btn, "p1");
  playStart = "p2";
  gameOver = false;
});
