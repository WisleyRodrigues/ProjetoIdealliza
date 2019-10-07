function validType(line) {
  const typeRegExp = /(?:\?|is I|is V|is X|is L|is C|is D|is M|is [0-9]|silver is|gold is|iron is)/gi
  if (!typeRegExp.test(line)) {
    console.log('Linha Invalida')
    console.log('Exemplo de linhas Corretas:')
    console.log('* pish pish Iron is 3910 Credits\n* how much is pish tegj glob glob ?\n* how much wood could a woodchuck chuck if a woodchuck could chuck wood ?')
    throw new Error(`Linha Invalida: ${line}`)
  }
}

module.exports = {
  validatorManegement(inputArr) {
    inputArr.forEach(elem => {
      validType(elem)
    });
  }
}