// Print the sum of numbers from 1 to 100

const myFunction = (i = 1) => {
  let sum = 0;

  for (i; i <= 100; i++) {
    sum = sum + i;
  }

  return sum;
};

console.log(myFunction());
