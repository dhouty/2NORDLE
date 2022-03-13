import { Letter } from 'types/Letter';
import './Letter.css';

export interface LetterProps {
    letter: Letter;
}

export function LetterView({ letter }: LetterProps) {
    return <div className={`letter ${letter.type}`}>{letter.value}</div>
}
