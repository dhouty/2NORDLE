import { Letter } from '../letter/Letter';

export function Guess({ letters }) {
    return <div className='guess'>
        {letters.map(({ letter, type }) => <Letter letter={letter} type={type} />)}
    </div>
}
