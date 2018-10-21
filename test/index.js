const signale = require('signale');
const verboseUtterance = require('./../src/index');
const greetingLex = require('./../lexicon/greeting.json');
const newsLex = require('./../lexicon/news.json');
const weatherLex = require('./../lexicon/weather.json');

let filenames = [
    // Samples without lexicon
    './samples/greeting.utter',
    './samples/news.utter',
    './samples/weather.utter',
    // Sample using lexicon
    './samples/greeting.lex.utter',
    './samples/news.lex.utter',
    './samples/weather.lex.utter',
];

filenames.forEach( function(filename) {
    let lex = null;
    switch (filename) {
      case './samples/greeting.lex.utter':
        lex = greetingLex;
      break;
      case './samples/news.lex.utter':
        lex = newsLex;
      break;
      case './samples/weather.lex.utter':
        lex = weatherLex;
      break;
    }
    verboseUtterance(filename, lex).then( (utterances) => {
        signale.success(`Filename (${filename}) results:`);
        console.log(utterances);
    });
});
