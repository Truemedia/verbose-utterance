const vegito = require('vegito');
const fs = require('fs');
const intentUtteranceExpander = require('intent-utterance-expander');
const config = require('./config.json');

function parseFile(filename, lexicon = null) {
    return new Promise((resolve, reject) => {
      fs.readFile(filename, 'utf8', (err, fileContents) => {
          err ? reject(err) : resolve(fileContents);
      });
    }).then( (fileContents) => {
        let utterances = [];
        fileContents.split('\n').filter(ln => (ln != '')).map( (ln) => { // Iterate file line by line if not empty line
            let lexFilter = vegito(ln, lexToList(lexicon), config);
            let verbose = intentUtteranceExpander(lexFilter);
            utterances.push(...verbose);
        });
        return utterances;
    });
}

function lexToList(lexicon)
{
  let data = {};
  if (lexicon != null) {
    Object.entries(lexicon).map(entry => {
      let [key,phrases] = entry;
      data[key] = '(' + phrases.join('|') + ')';
    });
  }
  return data;
}

module.exports = parseFile;
