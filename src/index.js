const { getRandomWordSync, getRandomWord } = require('word-maker');
const fs = require("fs");

console.log('It works!');

// YOUR CODE HERE


async function printgetRandomWordSync() {
  for (let i = 1; i <= 100; i++) {
    try {
      fs.appendFileSync("textSync.txt", `${i} : ${i % 15 === 0 ? "FizzBuzz" : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : getRandomWordSync({ withErrors: true })} \n`)   
    } catch (error) {
      fs.appendFileSync("textSync.txt", `${ i } : It shouldn't break anything! \n`)    
    }
  }
}


async function printgetRandomWordAsync() {
  for (let k = 1; k <= 100; k++) {
    try {
      fs.appendFileSync("textAsync.txt", `${k} : ${k % 15 === 0 ? "FizzBuzz" : k % 3 === 0 ? "Fizz" : k % 5 === 0 ? "Buzz" : await getRandomWord({ withErrors: true })} \n`)       
    } catch (error) {
      fs.appendFileSync("textAsync.txt", `${ k } : It shouldn't break anything! \n`)   
    }

  }
}

async function printgetRandomWordSlow() {
  for (let k = 1; k <= 100; k++) {
    try {
      fs.appendFileSync("textSlow.txt", `${k} : ${k % 15 === 0 ? "FizzBuzz" : k % 3 === 0 ? "Fizz" : k % 5 === 0 ? "Buzz" : await getRandomWord({withErrors: true,   slow: true })} \n`)       
    } catch (error) {
      fs.appendFileSync("textSlow.txt", `${ k } : It shouldn't break anything! \n`)   
    }

  }
}

printgetRandomWordSync();
printgetRandomWordAsync();
// printgetRandomWordSlow();