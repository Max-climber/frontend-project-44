import engine from '../index.js';
import getRandomInt from '../randomInt.js';

const isEven = (randomNumber) => randomNumber % 2 === 0;

function getData() {
  const randomNumber = getRandomInt(0, 100);

  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
}

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => engine(description, getData);
