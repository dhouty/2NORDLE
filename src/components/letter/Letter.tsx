import './Letter.css';

interface LetterProps {
    value: string;
    type: 'blank' | 'close' | 'exact';
}

export function Letter({ value, type }: LetterProps) {
    return <div className={`letter ${type}`}>{value}</div>;
}
