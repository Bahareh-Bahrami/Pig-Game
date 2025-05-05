'use strict';
//Selecting Elements
const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.getElementById('score--1');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Start Condition
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//User Rolls Dice
btnRoll.addEventListener('click', function () {
  //1. Generate random dice number
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Displey dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3.Check for roll 1
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    currentEl0.textContent = currentScore; //ChangeLater
  } else {
    //Switch player
  }
});

//User Holds Score

//User Resets game
