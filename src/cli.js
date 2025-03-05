import readlineSync from 'readline-sync';
import brain_even from './brain-even.js';
import brain_calc from './brain-calc.js';
import brain_gcd from './brain-gcd.js';
import brain_games from './brain-games.js';
import brain_progression from './brain-progression.js';
import brain_prime from './brain-prime.js';

const game_map = {
    even: brain_even,
    calc: brain_calc,
    gcd: brain_gcd,
    progression: brain_progression,
    prime: brain_prime,
};

const desc_map = {
    even: 'Answer "yes" if the number is even, otherwise answer "no".',
    calc: 'What is the result of the expression?',
    gcd: 'Find the greatest common divisor of given numbers.',
    progression: 'What number is missing in the progression?',
    prime: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};

export default (game) => {
    const name = brain_games();

    if (game === 'games') {
        return;
    }

    console.log(desc_map[game]);
    const game_func = game_map[game];

    for (let i = 0; i < 3; i += 1) {
        const [q, a] = game_func();
        console.log(`Question: ${q}`);
        const user_answer = readlineSync.question('Your answer: ');
        
        if (user_answer !== a) {
            console.log(`${user_answer} is wrong answer ;(. Correct answer was ${a}.\nLet's try again, ${name}!`);
            return;
        }

        console.log('Correct!');
    }

    console.log(`Congratulations, ${name}!`)
};
