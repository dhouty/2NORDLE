// Gets a list of random words of the given length
export function getRandomWords(count, length) {
    const availableWords = DICTIONARY[length];

    const randomIndexes = new Set();
    while (randomIndexes.size < count) {
        randomIndexes.add(Math.floor(Math.random() * availableWords.length));
    }

    return Array.from(randomIndexes).map(availableWords.at)
}

// Checks that the word is valid
export function isValidWord(word, length) {
    return word.length === length && // word must be the correct length
        /[A-Z]+/.test(word) && // word must only contain letters
        DICTIONARY[length].includes(word); // word must be in the dictionary
}

// Available words organized by length
const DICTIONARY = {
    5: [
        'stuff',
        'sting',
        'quota',
        'great',
        'sheep',
        'refer',
        'prove',
        'swarm',
        'value',
        'crime',
        'touch',
        'trait',
        'siege',
        'march',
        'radio',
        'pound',
        'offer',
        'chase',
        'crown',
        'shame',
    ],
};
