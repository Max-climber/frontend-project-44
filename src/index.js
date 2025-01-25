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

function getGCD(randomNumber1, randomNumber2) {
  if (randomNumber2 === 0) {
    return randomNumber1;
  } else {
    return getGCD(randomNumber2, randomNumber1 % randomNumber2);
  }
}

const engine = (description, getData) => {
  const userName = sayHelloToUser();
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const [question, expectedAnswer] = getData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");

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

export default engine;
export { getRandomInt, getRandomOperation, getGCD };
