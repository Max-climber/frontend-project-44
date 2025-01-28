/* eslint no-eval: 0 */
import engine from "../index.js";
import getRandomInt from "../randomInt.js";

function getRandomOperation() {
  const randomOperation = getRandomInt(0, 2);

  if (randomOperation === 0) {
    return "+";
  }
  if (randomOperation === 1) {
    return "-";
  }
  return "*";
}

function getData() {
  const randomNumber1 = getRandomInt(0, 100);
  const randomNumber2 = getRandomInt(0, 101);
  const randomOperation = getRandomOperation();

  const mathExpression = `${randomNumber1} ${randomOperation} ${randomNumber2}`;

  const expectedAnswer = eval(mathExpression).toString();
  return [mathExpression, expectedAnswer];
}

const description = "What is the result of the expression?";

export default () => engine(description, getData);
