/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").innerHTML = generateRandomNumber();
  document.querySelector(".card").classList.add(generateRandomSuit());
  var x = document.getElementById("button");
  x.addEventListener("click", generateRandomNumber);
  x.addEventListener("click", generateRandomSuit);
};

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
