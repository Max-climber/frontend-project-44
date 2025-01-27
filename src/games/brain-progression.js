import engine, { getProgression } from '../index.js';

function getData() {
  const [question, expectedAnswer] = getProgression();
  const expectedAnswerToSring = expectedAnswer.toString();
  return [question, expectedAnswerToSring];
}

const description = 'What number is missing in the progression?';

export default () => engine(description, getData);
