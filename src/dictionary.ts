// Gets a list of random words of the given length
export function getRandomWords(count: number, length: number): string[] {
    const availableWords = DICTIONARY[length];

    const randomIndexes = new Set<number>();
    while (randomIndexes.size < count) {
        randomIndexes.add(Math.floor(Math.random() * availableWords.length));
    }

    return Array.from(randomIndexes).map((i) => availableWords[i]);
}

// Checks that the word is in the dictionary
export function isValidWord(word: string, length: number): boolean {
    return DICTIONARY[length].includes(word); // TODO: optimize?
}

// Available words organized by length
const DICTIONARY: { [length: number]:  string[] } = {
    5: [
        'STUFF',
        'STING',
        'QUOTA',
        'GREAT',
        'SHEEP',
        'REFER',
        'PROVE',
        'SWARM',
        'VALUE',
        'CRIME',
        'TOUCH',
        'TRAIT',
        'SIEGE',
        'MARCH',
        'RADIO',
        'POUND',
        'OFFER',
        'CHASE',
        'CROWN',
        'SHAME',
    ],
};
