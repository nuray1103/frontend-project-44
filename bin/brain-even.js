#!/usr/bin/env node
// import readlineSync from 'readline-sync';
// import greeting from '../src/cli.js';
import gameBody from '../src/gameBody.js';
import { description, task } from '../src/games/even.js';

gameBody(description, task);