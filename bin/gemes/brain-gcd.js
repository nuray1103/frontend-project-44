#!/usr/bin/env node
import logicGame from '../../src/index.js';

const rules = 'Find the greatest common divisor of given numbers';

const twoRandomNumsFunction = () => {
  const oneRandomNum = Math.floor(Math.random() * 50) + 11;
  const twoRandomNum = Math.floor(Math.random() * 50) + 11;
  const twoRandomNums = `${oneRandomNum} ${twoRandomNum}`;
  return twoRandomNums;
};

const correctAnswerFunction = (twoRandomNums) => {
  const convertedToArray = twoRandomNums.split(' ');
  while (convertedToArray[0] !== convertedToArray[1]) {
    if (convertedToArray[0] > convertedToArray[1]) {
      convertedToArray[0] -= convertedToArray[1];
    } else {
      convertedToArray[1] -= convertedToArray[0];
    }
  }
  return convertedToArray[0].toString();
};

console.log(logicGame(rules, twoRandomNumsFunction, correctAnswerFunction));