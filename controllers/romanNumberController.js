const romanNumbersObj = require('../data/romanNumbers.json')

function calculateRomanNumber(romanNumber){
  let value = 0

  const numberArr = romanNumber.toUpperCase().split('');

  numberArr.forEach((elem, i) => {
    const currentNumber = romanNumbersObj[elem];
    const nextNumber = romanNumbersObj[numberArr[i + 1]];

    if(currentNumber < nextNumber) {
      value -= currentNumber;
      return;
    }
    value += currentNumber;
  });

  return value;
}

module.exports = {
  calculateUnityValue(qty, totalValue) {
    const normalNumber = calculateRomanNumber(qty);
    return totalValue / normalNumber;
  },

  convertRomanNumber(numberString) {
    return calculateRomanNumber(numberString)
  }
}