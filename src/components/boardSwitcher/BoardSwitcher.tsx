import classNames from 'classnames';

import { Board } from 'types';
import './BoardSwitcher.css';

export interface BoardSwitcherProps {
    handlePrevious: () => void;
    handleNext: () => void;
    handleShortcut: (index: number) => void;
    boards: Board[];
    currentBoardIndex: number;
}

export function BoardSwitcherView({
    handlePrevious,
    handleNext,
    handleShortcut,
    boards,
    currentBoardIndex
}: BoardSwitcherProps) {
    return <div className='board-switcher'>
        <div className='previous-button' onClick={handlePrevious}>&#x25c0;&#xfe0e;</div>

        <div className='board-list'>
            {boards.map(({ solved }, index) => {
                const classes = classNames('board-shortcut', {
                    solved,
                    active: index === currentBoardIndex,
                });

                return <div className={classes} key={index} onClick={() => handleShortcut(index)}>{index + 1}</div>
            })}
        </div>

        <div className='next-button' onClick={handleNext}>&#x25b6;&#xfe0e;</div>
    </div>
}
