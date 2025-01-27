import readlineSync from 'readline-sync';
import sayHelloToUser from './cli.js';

function getRandomInt(min, max) {
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOperation() {
  const randomOperation = getRandomInt(0, 2);

  if (randomOperation === 0) {
    return '+';
  } if (randomOperation === 1) {
    return '-';
  }
  return '*';
}

function getGCD(randomNumber1, randomNumber2) {
  if (randomNumber2 === 0) {
    return randomNumber1;
  }
  return getGCD(randomNumber2, randomNumber1 % randomNumber2);
}

function getProgression() {
  const start = getRandomInt(1, 50);
  const step = getRandomInt(1, 5);

  const progression = Array.from({ length: 10 }, (_, i) => start + step * i);

  const missingIndex = getRandomInt(0, 9);
  const missingNum = progression[missingIndex];

  progression[missingIndex] = '..';

  const formattedProgression = progression.join(' ');

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
    const userAnswer = readlineSync.question('Your answer: ');

    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default engine;
export {
  getRandomInt, getRandomOperation, getGCD, getProgression, isPrime,
};
