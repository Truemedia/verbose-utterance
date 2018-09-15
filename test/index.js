const signale = require('signale');
const verboseUtterance = require('./../src/index');

let filenames = [
    './samples/greeting.utter',
    './samples/news.utter',
    './samples/weather.utter'
];

filenames.forEach( function(filename) {
    verboseUtterance(filename).then( (utterances) => {
        signale.success(`Filename (${filename}) results:`);
        console.log(utterances);
    });
});
