import { Guess } from './Guess';

export interface Board {
    word: string;
    guesses: Guess[];
}
