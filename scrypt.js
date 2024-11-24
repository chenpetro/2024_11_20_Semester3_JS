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
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => {
//   return value > 3;
// });


// console.log(filteredNumbers); // [4, 5]

// const dirtyMultiply = (array, value) => {
//     for (let i = 0; i < array.length; i += 1) {
//       array[i] = array[i] * value;
//     }
//   }; 
//   const numbers = [1, 2, 3, 4, 5];
 
//   dirtyMultiply(numbers, 2);
 
//   // Відбулася мутація вихідних Даних
//   console.log(numbers); // [2, 4, 6, 8, 10]

// const pureMultiply = (array, value) => {
//     const result = [];
 
//     for (let i = 0; i < array.length; i += 1) {
//       result.push(array[i] * value);
//     }
 
//     return result;
//   };
 
//   const numbers = [1, 2, 3, 4, 5];
//   const doubledNumbers = pureMultiply(numbers, 2);
 
//   // Не сталося мутації вихідних даних
//   console.log(numbers); // [1, 2, 3, 4, 5]
 
//   // Функція повернула новий масив зі зміненими даними
//   console.log(doubledNumbers); // [2, 4, 6, 8, 10]



// const dirtyCalc = (a, b, c, d) => {
//     a = a / 2;
//     b = b * 2;
//     c = c + c;
//     d = d - 5;
//     return { a, b, c, d }; 
//   };
  
  
//   console.log(dirtyCalc(4, 8, 9, 2));
  
 
//   const clearCalc = (a, b, c, d) => {
//     const aa = a / 2;
//     const bb = b * 2;
//     const cc = c + c;
//     const dd = d - 5;
//     return { aa, bb, cc, dd }; // Return the new values as an object
//   };
  
//   console.log(clearCalc(4, 8, 9, 2));

// const randomNames = ['petro', 'marko', 'tuzik', 'fewfewwe']
// randomNames.forEach(function(element, index, array){
// console.log(`${index+1}-${element}`);
// })

// const numericRandomNames = randomNames.map(function(element, index, array){
// return element.toUpperCase()
// })

// console.log(numericRandomNames);

// const LessFourLetterNames = randomNames.filter(function(element, index, array){
//     return element.length<=5
// })

// console.log(LessFourLetterNames);

// const findTuzik = randomNames.find(function(element, index, array){
//     return element == 'tuzik' 
// })

// console.log(findTuzik);


// const moreTwoLetteNames = randomNames.every(function(element,index,array){
//     return element.length>=2
// })

// console.log(moreTwoLetteNames);


// const moreSevenLetteNames = randomNames.some(function(element,index,array){
//     return element.length>=6
// })

// console.log(moreSevenLetteNames);


const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  ];
  


//   Використовуючи 👆 масив об’єктів виконай наступні завдання
//   1 Отримати масив імен всіх гравців

// const playerNames = players.map(player => player.name);
// console.log(playerNames);

//   2 Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)

// const updatedPlayers = players.map(player => ({
//     ...player, // Розпорошуємо старий об'єкт
//     points: Math.round(player.points * 1.1), // Збільшуємо поінти на 10% та округлюємо
//   }));
  
//   console.log(updatedPlayers);
  
  

//   3 Збільшити кількість годин гравця по id. Переписати на тернарник

// const updatePlayerTime = (players, playerId, additionalTime) => 
//   players.map(player => 
//     player.id === playerId 
//       ? { ...player, timePlayed: player.timePlayed + additionalTime } 
//       : player
//   );

// const updatedPlayers = updatePlayerTime(players, 'player-3', 50);

// console.log(updatedPlayers);




// //   4 Отримати масив всіх гравців онлайн

// const getOnlinePlayers = players => players.filter(player => player.online);

// const onlinePlayers = getOnlinePlayers(players);

// console.log(onlinePlayers);



// //   5 Отримати масив всіх гравців офлайн

// const getOfflinePlayers = players => players.filter(player => !player.online);

// const offlinePlayers = getOfflinePlayers(players);

// console.log(offlinePlayers);

//   6 Отримати масив всіх хардкорних гравців з часом більше 250

// const getTimePlayers = players => players.filter(player => player.timePlayed>250);

// const getTime250Players = getTimePlayers(players);

// console.log(getTime250Players);


//   7 Знайти гравця по id
const getIDPlayers = (players, id) => players.find(player => player.id == id);
const playerByID = getIDPlayers(players, 'player-3');

console.log(playerByID);


//   8 Знайти гравця по імені

const getNamePlayers = (players, name) => players.find(player => player.name == name);
const playerByName = getNamePlayers(players, 'Chelsy');

console.log(playerByName);


//   9 Перевірити чи всі гравці мають час більше 200

const areAllPlayersTimeAbove200 = players => players.every(player => player.timePlayed > 200);

const result = areAllPlayersTimeAbove200(players);

console.log(result); // true або false



//   10 Перевірити чи всі гравці онлайн

const areAllPlayersOnline = players => players.every(player => player.online == true);

const OnlinePlayers = areAllPlayersOnline(players);

console.log(OnlinePlayers); // true або false