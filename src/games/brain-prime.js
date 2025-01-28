import engine from '../index.js';

function getRandomInt(min, max) {
  const convertedMax = Math.floor(max);
  return Math.floor(Math.random() * (convertedMax - min + 1)) + min;
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

function getData() {
  const randomNumber = getRandomInt(0, 100);

  const expectedAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => engine(description, getData);
