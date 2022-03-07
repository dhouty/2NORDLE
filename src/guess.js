import _ from 'lodash';

import { isValidWord } from './dictionary';

const LETTER_REGEX = /^[A-Z]$/;

export class Guess {
    constructor(length) {
        this.length = length;
        this.guess = Array(length).fill(null);
        this.cursor = 0;
    }

    addLetter(letter) {
        if (LETTER_REGEX.test(letter) && this.cursor < this.length) {
            this.guess[this.cursor] = { letter };
            this.setCursor(this.cursor + 1);
        }
    }

    removeLetter() {
        const preShift = !this.guess[this.cursor];

        if (preShift) {
            this.setCursor(this.cursor - 1);
        }

        this.guess[this.cursor] = null;

        if (!preShift) {
            this.setCursor(this.cursor - 1);
        }
    }

    isValid() {
        let word = '';

        for (const { letter } of this.guess) {
            if (LETTER_REGEX.test(letter)) {
                word += letter;
            } else {
                return false;
            }
        }

        return isValidWord(word, this.length);
    }


    compare(word) {
        const letters = word.split('');
        const result = _.cloneDeep(this.guess);

        for (let i = 0; i < result.length; i++) {
            if (result[i].letter === letters[i]) {
                result[i].type = 'exact';
                letters[i] = null;
            }
        }

        for (let i = 0; i < result.length; i++) {
            if (!result[i].type) {
                const j = letters.indexOf(result[i].letter);
                if (j >= 0) {
                    result[i].type = 'close';
                    letters[j] = null;
                } else {
                    result[i].type = 'miss';
                }
            }
        }

        return result;
    }

    getCursor() {
        return this.cursor;
    }

    setCursor(index) {
        this.cursor = _.clamp(index, 0, this.length);
    }
}
