#!/usr/bin/env node
console.log("Welcome to the Brain Games!");

import sayHelloToUser from "../src/cli.js";
import readlineSync from "readline-sync";
console.log(sayHelloToUser());
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log(`Question: ${Math.random()}`);

const userAnswer = readlineSync.question("Your answer: ");

const isEven = (randomNumber) => randomNumber % 2 === 0;

const expectedAnswer = isEven(randomNumber) ? "yes" : "no";
if (expectedAnswer === userAnswer) {
  console.log("Correct");
}
