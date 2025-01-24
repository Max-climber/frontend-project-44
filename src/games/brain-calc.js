import sayHelloToUser from "../../src/cli.js";
import readlineSync from "readline-sync";
import { getRandomInt, getRandomOperation } from "../../src/index.js";

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
