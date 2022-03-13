import { Board } from 'types';
import { getRandomWords } from 'utils/dictionary';

export class GameModel {
    boards: Board[];
    
    constructor(
        wordLength: number,
        totalGuesses: number,
        totalBoards: number,
    ) {
        const words = getRandomWords(totalBoards, wordLength);

        this.boards = words.map((word) => {
            return {
                word,
                solved: false,
                guesses: [...Array(totalGuesses)].map(() => {
                    return {
                        letters: [...Array(wordLength)].map(() => {
                            return { value: '', type: 'blank' };
                        }),
                    };
                }),
            };
        });
    }
}
