import { Guess } from './Guess';

export interface Board {
    word: string;
    solved: boolean;
    guesses: Guess[];
}
