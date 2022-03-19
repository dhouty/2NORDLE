import { forwardRef, RefObject } from 'react';

import { Board } from 'types/Board'
import { GuessView } from 'components/guess';
import './Board.css';

export interface BoardProps {
    board: Board;
}

export const BoardView = forwardRef(({ board }: BoardProps, ref: RefObject<HTMLDivElement>) => {
    return <div ref={ref} className='board'>
        {board.guesses.map((guess, index) => {
            return <GuessView key={index} guess={guess} />
        })}
    </div>
});
