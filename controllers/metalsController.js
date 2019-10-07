const {calculateUnityValue} = require('./romanNumberController')

module.exports = {
  /**
   * Função que faz o controle dos metais,
   * transforma em um objeto com os dados de quantidade,
   * valor unitario entre outros dados.
   * @param {Array} metalArr 
   * @param {Array} galaxyArr 
   */
  metalsManagement(metalArr, galaxyArr) {
    metalArr = metalArr.map(elem =>{
      elem.splitted = elem.originalInput.split(' ');
      return elem
    });
    
    metalArr.forEach(elem => {
      elem.splitted.forEach((splittedElem, i) => {
        if (splittedElem === 'is') {
           elem.metal = elem.splitted[i - 1];
        }

        if(galaxyArr[splittedElem]) {
          if(elem.qtyRoman) {
            elem.qtyRoman += galaxyArr[splittedElem];
            return;
          }
          elem.qtyRoman = galaxyArr[splittedElem];
        }
      })
      elem.totalValue = elem.originalInput.match(/\d+/g)[0];

      elem.unityValue = calculateUnityValue(elem.qtyRoman, elem.totalValue)
    });

    return metalArr;
  }
}