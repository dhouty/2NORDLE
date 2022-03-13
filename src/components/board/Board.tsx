import { Board } from 'types/Board'
import { GuessView } from 'components/guess';
import './Board.css';

export interface BoardProps {
    board: Board;
}

export function BoardView({ board }: BoardProps) {
    return <div className='board'>
        {board.guesses.map((guess, index) => {
            return <GuessView key={index} guess={guess} />
        })}
    </div>
}
