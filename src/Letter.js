import './Letter.css';

export function Letter({ letter }) {
    return <div className='letter'>{letter?.toUpperCase()}</div>;
}
