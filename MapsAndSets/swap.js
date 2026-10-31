"use strict"

const objects = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Вася' },
]

const set = new Set();

objects.map((item) => {
  const existed = [...set].find((setItem) => setItem.id === item.id);

  if (!existed) {
    set.add(item)
  }
})

const result = [...set];
