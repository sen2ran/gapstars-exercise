const { getRandomWordSync, getRandomWord } = require('word-maker');
const fs = require("fs");

console.log('It works!');

const getFizzBuzz = n => `${n % 15 === 0 ? "FizzBuzz" : n % 3 === 0 ? "Fizz" : n % 5 === 0 ? "Buzz" : ''}`;

function dataLog(outFile, line) {
  line += '\n';
  fs.appendFile(outFile, line, function (err) {
    if (err) throw err;
  });
}

async function printgetRandomWordSync() {
  for (let i = 1; i <= 100; i++) {
    try {
      dataLog("textSync.txt", `${i} : ${getFizzBuzz(i) || getRandomWordSync({ withErrors: true })} \n`)
    } catch (error) {
      dataLog("textSync.txt", `${i} : It shouldn't break anything! \n`)
    }
  }
}

async function printgetRandomWordAsync() {
  for (let k = 1; k <= 100; k++) {
    try {
      dataLog("textAsync.txt", `${k} : ${getFizzBuzz(k) || await getRandomWord({ withErrors: true })} \n`)
    } catch (error) {
      dataLog("textAsync.txt", `${k} : It shouldn't break anything! \n`)
    }
  }
}

async function printgetRandomWordSlow() {
  // let TmpArray = []
  // for (let k = 1; k <= 100; k++) {
  //   getRandomWord({ withErrors: true, slow: true }).then(word => {
  //     TmpArray[k - 1] = `${k} : ${getFizzBuzz(k) || word}`
  //   }).catch(error => {
  //     TmpArray[k - 1] = `${k} : It shouldn't break anything!`
  //   })
  // }
  // setTimeout(() => {
  //   console.log(TmpArray);
  // }, 200);
  const promises = Array(100).fill().map(async (v, i) => {
    i++;
    try {
      return `${i}: ${getFizzBuzz(i) || await getRandomWord({ withErrors: true, slow: true })}`;
    } catch (err) {
      return `${i}: It shouldn't break anything!`;
    }
  });
  let printRandomWordSlowArray = await Promise.all(promises)
  printRandomWordSlowArray.map(word => dataLog("textSlow.txt", word))
}

printgetRandomWordSync();
printgetRandomWordAsync();
printgetRandomWordSlow();