const fs = require('fs');

const { validatorManegement } = require('./controllers/validator');
const { inputManagement } = require('./controllers/inputController');
const { metalsManagement } = require('./controllers/metalsController');
const { questionManagement } = require('./controllers/questionsController');

const inputArr = fs.readFileSync(`./data/input.csv`, {encoding: 'utf8'}).split('\r\n');

function start() {
  validatorManegement(inputArr);

  const [galaxyArr, metalArr, questionsArr] = inputManagement(inputArr);

  metalsManagement(metalArr, galaxyArr);
  
  questionManagement(questionsArr, metalArr, galaxyArr);
}

start();