import engine from "../../src/index.js";
import { getRandomInt } from "../../src/index.js";

function getData() {
  const randomNumber1 = getRandomInt(0, 100);
  const randomNumber2 = getRandomInt(0, 101);

  const mathExpression = `${randomNumber1} ${randomNumber2}`;

  const expectedAnswer = eval(mathExpression).toString();
  return [mathExpression, expectedAnswer];
}

const description = `Find the greatest common divisor of given numbers.`;

export default () => engine(description, getData);
