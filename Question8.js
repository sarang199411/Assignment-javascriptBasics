//Write a program to find the sum of all the odd numbers for a given limit (if you choose limit as 10 then need to find the sum of all odd numbers in between 1 and 10 )

let limit = 5;

let sum = 0;

for (let i = 1; i <= limit; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
console.log(sum);
