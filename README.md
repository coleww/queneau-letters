queneau-letters
----------------


A Queneau letter-chunks node module based on [Leonard Richardson's algorithm](http://www.crummy.com/2011/08/18/0)


http://www.crummy.com/2011/08/18/0
```
Words made from letter-chunks

Many games have single-word titles, eg. "Carcassonne". I wanted to have single-word titles in BGD, but I didn't want to duplicate real names. So I applied the Queneau assembly algorithm on the word level.

Here, the chunk is a run of letters that's all vowels or all consonants. So "Carcassonne" would be split into the chunks ["C", "a", "rc", "a", "ss", "o", "nn", e"]. I keep two sets of buckets, one for vowels and one for consonants. If the first chunk was a vowel chunk, the second chunk is a consonant chunk, and I alternate til I reach the end.

This means that single-word BGD titles are almost never English words, but they do capture the feel of those one-word titles that aren't words (examples: "Zajekan", "Fraseda", "Kongin", "Q-blardo").
```

[![NPM](https://nodei.co/npm/queneau-letters.png)](https://nodei.co/npm/queneau-letters/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://secure.travis-ci.org/coleww/queneau-letters.png)](http://travis-ci.org/coleww/queneau-letters)

### EXAMPLE

### API
