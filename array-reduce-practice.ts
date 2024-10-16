/*
Write a function that takes an array of numbers and returns the sum of all the numbers.
*/
function sumOfNumbers(num: number[]): number {
  return num.reduce((result, current) => result + current, 0);
}

console.log(sumOfNumbers([1, 2, 3, 4, 5]));

/*
Write a function that returns the maximum number from an array of numbers.
*/

function maxNumberInArr(num: number[]): number {
  return num.reduce(
    (result, current) => (current > result ? current : result),
    num[0]
  );
}

console.log(maxNumberInArr([21, 2, 32, 4, 5]));

/* 
Write a function that counts how many times a specific element appears in an array.
*/
function getOccurence(arr: string[], searchWord: string) {
  return arr.reduce(
    (result, current) => (current === searchWord ? result + 1 : result),
    0
  );
}
const array = ["apple", "banana", "apple", "orange", "banana"];
const elementToCount = "banana";

console.log(getOccurence(array, elementToCount));

/*
Write a function that flattens a two-dimensional array into a one-dimensional array.
*/
const nestedArray = [[1, 2], [3, 4], [5]];

console.log(nestedArray.reduce((result, current) => [...result, ...current]));
