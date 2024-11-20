// const a = {
//     name: 'Marko',
//     surname: 'Chen',
//     age: 199
// }

// mass = [32, 543, 'Marko']

// Imperative approach
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];


// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }


// console.log(filteredNumbers); // [4, 5]

// Declarative approach
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(value => {
  return value > 3;
});


console.log(filteredNumbers); // [4, 5]