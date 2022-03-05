import { Guess } from './Guess';

export function Board({ guesses }) {
    return <div>
        {guesses.map(guess => <Guess letters={guess} />)}
    </div>
}
