import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('Мay I have your name? ');
  return name;
};
export default getName;
