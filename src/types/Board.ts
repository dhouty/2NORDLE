import { Guess } from './Guess';

export interface Board {
    word: string;
    solved: true;
    guesses: Guess[];
}
