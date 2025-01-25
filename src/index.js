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

function getProgression() {
  let start = getRandomInt(1, 50);
  let step = getRandomInt(1, 5);

  const progression = Array.from({ length: 10 }, (_, i) => start + step * i);

  const missingIndex = getRandomInt(0, 9);
  const missingNum = progression[missingIndex];

  progression[missingIndex] = "..";

  const formattedProgression = progression.join(" ");

  return [formattedProgression, missingNum];
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num - 1; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
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
export { getRandomInt, getRandomOperation, getGCD, getProgression, isPrime };
