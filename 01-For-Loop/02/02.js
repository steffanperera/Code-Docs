// Print even numbers between 1 and 20

const evenNumbers = (i = 1) => {
  let arr = [];

  for (i; i <= 20; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }

  return arr;
};

console.log(evenNumbers());
