import engine, { getRandomInt, isPrime } from '../index.js';

function getData() {
  const randomNumber = getRandomInt(0, 100);

  const expectedAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => engine(description, getData);
