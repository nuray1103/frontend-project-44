const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const task = () => {
  const q = Math.round(Math.random() * 100);
  let a = '';
  if (q % 2 === 0) {
    a = 'yes';
  } else {
    a = 'no';
  }

  return [q, a];
};

export { description, task };