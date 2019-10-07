const {convertRomanNumber} = require('./romanNumberController');

/**
 * Função que checa se a questão e do tipo Galaxia.
 * @param {string} question 
 * @param {Array} galaxyArr 
 */
function checkGalaxyQuestion(question, galaxyArr) {
  const galaxyKeys = Object.keys(galaxyArr).join('|');
  const galaxyRegExp = new RegExp(`${galaxyKeys}`, 'gi');
  
  return galaxyRegExp.test(question);
}

/**
 * Função que resolve as questões do tipo Galaxia.
 * @param {string} question 
 * @param {Array} galaxyArr 
 */
function solveGalaxyQuestion(question, galaxyArr) {
  const galaxyKeys = Object.keys(galaxyArr);
  const questionSplitted = question.split(' ');
  const romanNumber = [];
  let answer = [];

  questionSplitted.forEach((elem) => {
    if (galaxyKeys.includes(elem)) {
      answer.push(elem);
      romanNumber.push(galaxyArr[elem])
    }
  })

  const totalValue = convertRomanNumber(romanNumber.join(''))

  answer = answer.join(' ')

  return `${answer} is ${totalValue}`;
}

/**
 * Função que checa se a questão e do tipo Metal.
 * @param {string} question 
 * @param {Array} metalArr 
 */
function checkMetalQuestion(question, metalArr) {
  const metals = metalArr.map(elem => elem.metal).join('|');
  const metalRegExp = new RegExp(`${metals}`, 'gi');
  
  return metalRegExp.test(question);
}

/**
 * Função que resolve as questões do tipo Metal.
 * @param {string} question 
 * @param {Array} metalArr 
 * @param {Array} galaxyArr 
 */
function solveMetalQuestion(question, metalArr, galaxyArr) {
  const metals = metalArr.map(elem => elem.metal).join('|');
  const questionSplitted = question.split(' ');
  let actualyMetalQuestion = null;
  let qtyRoman = null;
  let answer = null;

  questionSplitted.forEach((elem) => {
    if (qtyRoman == null && galaxyArr[elem]) {
      answer = elem
      qtyRoman = galaxyArr[elem];
      return;
    } else if (galaxyArr[elem]) {
      answer = `${answer} ${elem}`
      qtyRoman += galaxyArr[elem]
    };
    
    if (metals.includes(elem)) {
      actualyMetalQuestion = elem;
    }
  })
  
  const {unityValue, metal} = metalArr.find(elem => elem.metal === actualyMetalQuestion);
  const convertedQty = convertRomanNumber(qtyRoman);
  const totalValue = convertedQty * unityValue;

  return `${answer} ${metal} is ${totalValue} Credits`;
}

/**
 * Função que gerencia as checagens e soluções das questões.
 * @param {String} question 
 * @param {Array} metalArr 
 * @param {Array} galaxyArr 
 */
function solveQuestion(question, metalArr, galaxyArr) {
  if (checkMetalQuestion(question, metalArr)) {

    return solveMetalQuestion(question, metalArr, galaxyArr);
  } else if (checkGalaxyQuestion(question, galaxyArr)) {
    
    return solveGalaxyQuestion(question, galaxyArr);
  } else {
    return 'I have no idea what you are talking about';
  }
};

module.exports = {
  /**
   * Função que gerencia as questões passando as questões de forma unitaria para proxima função.
   * @param {Array} questionsArr 
   * @param {Array} metalArr 
   * @param {Array} galaxyArr 
   */
  questionManagement(questionsArr, metalArr, galaxyArr) {
    console.log()
    questionsArr.forEach(elem => {
      console.log(solveQuestion(elem, metalArr, galaxyArr));
    });
    console.log()
  }
}