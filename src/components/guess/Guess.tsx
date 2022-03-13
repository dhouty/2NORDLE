import { Guess } from 'types/Guess';
import { LetterView } from 'components/letter';

export interface GuessProps {
    guess: Guess;
}

export function GuessView({ guess }: GuessProps) {
    return <div className='guess'>
        {guess.letters.map((letter, index) => {
            return <LetterView key={index} letter={letter} />
        })}
    </div>
}
