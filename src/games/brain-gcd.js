import engine from '../index.js';
import getRandomInt from '../randomInt.js';

function getGCD(randomNumber1, randomNumber2) {
  if (randomNumber2 === 0) {
    return randomNumber1;
  }
  return getGCD(randomNumber2, randomNumber1 % randomNumber2);
}

function getData() {
  const randomNumber1 = getRandomInt(0, 100);
  const randomNumber2 = getRandomInt(1, 101);

  const expectedAnswer = getGCD(randomNumber1, randomNumber2).toString();
  const question = `${randomNumber1} ${randomNumber2}`;

  return [question, expectedAnswer];
}

const description = 'Find the greatest common divisor of given numbers.';

export default () => engine(description, getData);
