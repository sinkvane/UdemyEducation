"use strict";

function fifthTask() {
  const arrayOfNumbers = [];

  for (let i = 5; i <= 10; i++) {
    arrayOfNumbers[i - 5] = i;
  }
  console.log(arrayOfNumbers);


  // Не трогаем
  return arrayOfNumbers;
}

fifthTask();