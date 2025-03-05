#!/usr/bin/env node
import logicGame from '../../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateNumber = () => Math.floor(Math.random() * 50);

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');


console.log(logicGame(rules, generateNumber, getCorrectAnswer));