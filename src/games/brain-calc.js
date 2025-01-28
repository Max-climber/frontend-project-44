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

function calculateExpression(num1, num2, operation) {
  switch (operation) {
    case "+":
      return (num1 + num2).toString();
    case "-":
      return (num1 - num2).toString();
    case "*":
      return (num1 * num2).toString();
  }
}

function getData() {
  const randomNumber1 = getRandomInt(0, 100);
  const randomNumber2 = getRandomInt(0, 101);
  const randomOperation = getRandomOperation();

  const mathExpression = `${randomNumber1} ${randomOperation} ${randomNumber2}`;

  const expectedAnswer = calculateExpression(
    randomNumber1,
    randomNumber2,
    randomOperation
  );
  return [mathExpression, expectedAnswer];
}

const description = "What is the result of the expression?";

export default () => engine(description, getData);
