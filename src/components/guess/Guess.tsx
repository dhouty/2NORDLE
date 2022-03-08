import { Letter } from '../letter/Letter';

export function Guess({ letters }) {
    return <div className='guess'>
        {letters.map(({ letter, type }, index) => {
            return <Letter key={index} letter={letter} type={type} />
        })}
    </div>
}
