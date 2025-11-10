// Print the sum of numbers from 1 to 100

const myFunction = (i = 1) => {
  let numbers = [];
  let sum = 0;

  for (i; i <= 100; i++) {
    numbers.push(i);
  }

  numbers.forEach((number) => {
    sum = sum + number;
  });

  return sum;
};

console.log(myFunction());
