#!/usr/bin/env node
console.log("Welcome to the Brain Games!");

import sayHelloToUser from "../src/cli.js";
import readlineSync from "readline-sync";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function main() {
  console.log(sayHelloToUser());
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const isEven = (randomNumber) => randomNumber % 2 === 0;
  for (let i = 0; i < 3; i++) {
    const randomNumber = getRandomInt(0, 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question("Your answer: ");
    const expectedAnswer = isEven(randomNumber) ? "yes" : "no";
    if (expectedAnswer === userAnswer) {
      console.log("Correct");
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, Bill!`
      );
      return;
    }
  }
  console.log("Congratulations, Bill!");
}

main();
