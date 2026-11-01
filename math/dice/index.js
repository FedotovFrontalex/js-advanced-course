"use strict"

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const takeDice = (dice) => {
  if (typeof dice !== 'string') {
    throw new Error('wrong argument type')
  }

  const pattern = /^d(4|6|8|10|12|16|20)$/i;

  if (!dice.match(pattern)) {
    throw new Error('wrong dice');
  }

  const max = dice.slice(1);

  return getRandom(1, Number(max));
}

['d4','d6','d8','d10','d12','d16','d20'].forEach(d => console.log(d, takeDice(d)))
