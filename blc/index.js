const fs = require('fs');
const path = require('path');
const alphabet = require('../alphabet/alphabet.json');

const letters = Object.assign(
  alphabet.letters.lowerCases,
  alphabet.letters.upperCases,
  alphabet.space
);

const baseSymbols = alphabet.baseSymbols;

let resultPath;

if (process.argv.length <= 2) {
  console.log("Please use file");
  process.exit(-1);
} else if (process.argv.length > 3) {
  resultPath = process.argv[3];
} else {
  resultPath = __dirname + '/result';
}

const filePath = process.argv[2];

fs.readFile(filePath, (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error(filePath + ' does not exist');
      return;
    } else {
      throw err;
    }
  }
  fs.writeFile(resultPath, compile(data.toString()), (err) => {
    if (err) {
      throw err;
    } else {
      console.log('Compilation complited ::: Result in ', resultPath);
    };
  });

});

function compile(str){
  var compiled = '';
  var chars = str.split('');
  for(var i=0; i < chars.length - 1; i++) {
    // exclude !+(){}[] symbols
    if (baseSymbols.indexOf(chars[i]) == -1) {
      compiled += letters[chars[i]];
      if(i != chars.length - 2) {
        compiled += '+';
      }
    } else {
      // TODO: Optimize this case
      compiled = compiled.substr(0, compiled.length - 1);
      compiled += chars[i];
    }
  }
  return compiled;
}