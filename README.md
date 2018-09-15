# Verbose Utterance
Interprete/compile files with the .utter extension for creating a verbose library of utterances.

See samples folder for example files that can be used.

## Installation

NPM
```bash
    npm i --save verbose-utterance
```

Yarn
```bash
    yarn add verbose-utterance
```

## Usage
Node
```js
    const verboseUtterance = require('verbose-utterance');
    verboseUtterance('filename.utter').then( (utterances) => {
        console.log('results', utterances);
    });
```

ES6+
```js
    import verboseUtterance from 'verbose-utterance';
    verboseUtterance('filename.utter').then( (utterances) => {
        console.log('results', utterances);
    });
```

## Current features
- [Utterance expander](https://www.npmjs.com/package/intent-utterance-expander)

## Future features (not yet implemented)

### Coverage strategy (Synset)
Using wordnet which has words group by synonyms with a key called a synset, it is possible to target words using a synset in an expression rather than a word.

Expanding all the possible words with the same meaning eliminates the possibility of a user using a phrase they would expect to be a valid utterance and being disappointed by it not being supported.

### Verbose strategy (Word emition)
By using a stopword synonym prefixed with a pipe, the compiled utterances will contains extracts with and without stopwords which will increase the chances of matching someone who speaks in a verbose manner.
