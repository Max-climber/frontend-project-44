import engine from "../../src/index.js";
import { getRandomInt, getRandomOperation } from "../../src/index.js";

function getData() {
  const randomNumber1 = getRandomInt(0, 100);
  const randomNumber2 = getRandomInt(0, 101);
  const randomOperation = getRandomOperation();

  const mathExpression = `${randomNumber1} ${randomOperation} ${randomNumber2}`;

  const expectedAnswer = eval(mathExpression).toString();
  return [mathExpression, expectedAnswer];
}

const description = `What is the result of the expression?`;

export default () => engine(description, getData);
