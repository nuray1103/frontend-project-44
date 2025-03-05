const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const task = () => {
  const num = Math.round(Math.random() * 50);

  if (num <= 1) {
    return [num, 'no'];
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return [num, 'no'];
    }
  }

  return [num, 'yes'];
};

export { description, task };