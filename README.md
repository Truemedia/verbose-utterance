# Verbose Utterance
Interprete/compile *.utter files for creating a verbose library of utterances

## Coverage strategy (Synset)
Using wordnet which has words group by synonyms with a key called a synset, it is possible to target words using a synset in an expression rather than a word.

Expanding all the possible words with the same meaning eliminates the possibility of a user using a phrase they would expect to be a valid utterance and being disappointed by it not being supported.

## Verbose strategy (Word emition)
By using a stopword synonym prefixed with a pipe, the compiled utterances will contains extracts with and without stopwords which will increase the chances of matching someone who speaks in a verbose manner.
