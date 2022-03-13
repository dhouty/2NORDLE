import classNames from 'classnames';

import { Board } from 'types';
import './BoardSwitcher.css';

export interface BoardSwitcherProps {
    handlePrevious: () => void;
    handleNext: () => void;
    boards: Board[];
    currentBoardIndex: number;
}

export function BoardSwitcherView({
    handlePrevious,
    handleNext,
    boards,
    currentBoardIndex
}: BoardSwitcherProps) {
    return <div className='board-switcher'>
        <div className='previous-button' onClick={handlePrevious}>&#x25c0;</div>

        <div className='board-list'>
            {boards.map((board, index) => {
                const classes = classNames('board-shortcut', {
                    solved: board.solved,
                    active: index === currentBoardIndex,
                });
                
                return <div className={classes}>{index}</div>
            })}
        </div>

        <div className='next-button' onClick={handleNext}>&#x25b6;</div>
    </div>
}
