import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const playEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `).trim().toLowerCase();

    if (isNaN(number) || (userAnswer !== 'yes' && userAnswer !== 'no')) {
      console.log("Invalid input. Please answer 'yes' or 'no'.");
      return;
    }


    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log("Let's try again!");
      return;
    }

    console.log('Correct!');
  }

  console.log('Congratulations, you won!');
};

export default playEvenGame;