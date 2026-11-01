"uese strict"

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const takeDice = (dice) => {
  const pattern = /^\d{1,2}d\d{1,2}$/gi;

  if (!dice.match(pattern)) {
    throw new Error('wrong dice');
  }

  const [min, max] = dice.split('d');

  return getRandom(Number(min), Number(max));
}

console.log(takeDice('1d20'));
