"uese strict"

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const takeDice = (dice) => {
  const pattern = /^d(4|6|8|10|12|16|20)$/gi;

  if (!dice.match(pattern)) {
    throw new Error('wrong dice');
  }

  const max = dice.slice(1);

  return getRandom(1, Number(max));
}

console.log(takeDice('d4'));
