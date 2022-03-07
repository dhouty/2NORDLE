import './Letter.css';

export function Letter({ letter, type }) {
    return <div className={`letter ${type}`}>{letter?.toUpperCase()}</div>;
}
