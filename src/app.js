/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const cardElem = document.querySelector(".card");
  cardElem.innerHTML = generateRandomNumber();
  cardElem.classList.add(generateRandomSuit());
  const btnElem = document.getElementById("button");
  btnElem.addEventListener("click", () => {
    cardElem.innerHTML = generateRandomNumber();
    cardElem.classList.add(generateRandomSuit());
  });
};
//Star Timer
let TimerId = setInterval(() => {
  const cardElem = document.querySelector(".card");
  cardElem.innerHTML = generateRandomNumber();
  cardElem.classList.add(generateRandomSuit());
}, 500);
//Funtion for
function generateRandomNumber() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randomNumb = Math.floor(Math.random() * numbers.length);
  return numbers[randomNumb];
}
function generateRandomSuit() {
  let suit = ["diamond", "spade", "heart", "club"];
  let randomSuit = Math.floor(Math.random() * suit.length);
  return suit[randomSuit];
}

document.querySelector("#button2").addEventListener("click", evt => {
  if (TimerId) {
    clearTimeout(TimerId);
    TimerId = null;
    evt.target.innerText = "Start";
  } else {
    TimerId = setInterval(() => {
      const cardElem = document.querySelector(".card");
      cardElem.innerHTML = generateRandomNumber();
      cardElem.classList.add(generateRandomSuit());
    }, 500);
    evt.target.innerText = "Stop";
  }
});
