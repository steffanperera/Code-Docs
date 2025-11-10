// Print numbers from 1 to 10 using a for loop

const testLoop = (i = 1) => {
  let numbers = [];

  for (i; i <= 10; i++) {
    numbers.push(i);
  }

  return numbers;
};

console.log(testLoop());
