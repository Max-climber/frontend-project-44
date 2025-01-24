import sayHelloToUser from "../src/cli.js";
import readlineSync from "readline-sync";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOperation() {
  const randomOperation = getRandomInt(0, 2);

  if (randomOperation === 0) {
    return "+";
  } else if (randomOperation === 1) {
    return "-";
  } else {
    return "*";
  }
}

const main = () => {
  const userName = sayHelloToUser();

  console.log("What is the result of the expression?");

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = getRandomInt(0, 100);
    const randomNumber2 = getRandomInt(0, 101);
    const randomOperation = getRandomOperation();

    const mathExpression = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
    console.log(`Question: ${mathExpression}`);
    const userAnswer = readlineSync.question("Your answer: ");
    const expectedAnswer = eval(mathExpression).toString();

    if (expectedAnswer === userAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${userName}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default main;
