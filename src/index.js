const fs = require('fs');
const intentUtteranceExpander = require('intent-utterance-expander');

function parseFile(filename) {
    return new Promise((resolve, reject) => {
      fs.readFile(filename, 'utf8', (err, fileContents) => {
          err ? reject(err) : resolve(fileContents);
      });
    }).then( (fileContents) => {
        let utterances = [];
        fileContents.split('\n').filter(ln => (ln != '')).map( (ln) => { // Iterate file line by line if not empty line
            let verbose = intentUtteranceExpander(ln);
            utterances.push(...verbose);
        });
        return utterances;
    });
}

module.exports = parseFile;
