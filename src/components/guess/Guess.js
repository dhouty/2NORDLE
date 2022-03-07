import { Letter } from '../letter/Letter';

export function Guess({ letters }) {
    return <div className='guess'>
        {letters.map(letter => <Letter letter={letter} />)}
    </div>
}
