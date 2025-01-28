import engine from '../index.js';

function getRandomInt(min, max) {
  const convertedMax = Math.floor(max);
  return Math.floor(Math.random() * (convertedMax - min + 1)) + min;
}

function getData() {
  const isEven = (randomNumber) => randomNumber % 2 === 0;
  const randomNumber = getRandomInt(0, 100);

  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
}

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => engine(description, getData);
