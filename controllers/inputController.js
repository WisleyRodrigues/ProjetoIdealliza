/**
 * Função que checa se o input e um questionamento ou não.
 * @param {string} string 
 */
function questionChecker(string) {
  const questionRegExp = /(?:\?|how)/i
  return questionRegExp.test(string)
};

/**
 * Função que checa se o input e sobre a lingua intergalatica.
 * @param {string} string 
 */
function galaxyChecker(string) {
  const galaxyRegExp = /is (?:I|V|X|L|C|D|M)/i
  return galaxyRegExp.test(string)
}

/**
 * Função que checa se o input são dados sobre os metais.
 * @param {string} string 
 */
function metalChecker(string) {
  const metalRegExp = /is [0-9]/i
  return metalRegExp.test(string)
}

module.exports = {
  /**
  * Função que faz o controle dos inputs, executando as checagens.
  * @param {Array} inputArr 
  */
  inputManagement(inputArr) {
    const questionsArr = [];
    const galaxyArr = {};
    const metalArr = [];

    inputArr.forEach(elem => {
      if (questionChecker(elem)) {

        questionsArr.push(elem);
      } else if (galaxyChecker(elem)) {

        const [name, is, romanNumber] = elem.split(' ');
        galaxyArr[name] = romanNumber;
      } else if (metalChecker(elem)){

        metalArr.push({originalInput: elem})
      } else {
        throw new Error(`Linha Invalida: ${elem}`)
      }
    });

    return [galaxyArr, metalArr, questionsArr]
  }
}