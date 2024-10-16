const numbers = [1, 2, 3, 4, 5, 6];

/*
Write a function that takes an array of numbers and
 returns a new array containing only the even numbers.
*/

const evenNumbers = numbers.filter((x) => x % 2 === 0);
console.log("Even Numbers:", evenNumbers);

/*
Given an array of objects representing students, 
write a function that returns an array of students who have a grade above 75.
*/
interface Student {
  name: string;
  grade: number;
}

const students: Student[] = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 72 },
  { name: "Charlie", grade: 90 },
  { name: "David", grade: 60 },
];

const result = students.filter((x) => x.grade > 75);

console.log("Result greater than 75", result);

/*
Write a function that filters an array of strings, returning only those with a length greater than 5 characters.
*/
const words = ["apple", "banana", "cherry", "date", "fig", "grape"];

console.log(words.filter((x) => x.length > 5));

/*
Given an array with duplicate numbers, write a function that returns an array of unique numbers.
*/
const mixedNumbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = mixedNumbers.filter(
  (num, index) => mixedNumbers.indexOf(num) === index
);
console.log("Unique Array", uniqueArr);


