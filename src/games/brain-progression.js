import engine from "../index.js";
import getRandomInt from "../randomInt.js";

function getProgression() {
  const start = getRandomInt(1, 50);
  const step = getRandomInt(1, 5);

  const progression = Array.from({ length: 10 }, (_, i) => start + step * i);

  const missingIndex = getRandomInt(0, 9);
  const missingNum = progression[missingIndex];

  progression[missingIndex] = "..";

  const formattedProgression = progression.join(" ");

  return [formattedProgression, missingNum];
}

function getData() {
  const [question, expectedAnswer] = getProgression();
  const expectedAnswerToSring = expectedAnswer.toString();
  return [question, expectedAnswerToSring];
}

const description = "What number is missing in the progression?";

export default () => engine(description, getData);
