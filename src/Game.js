import { useState } from 'react';

import TopBar from './TopBar';
import Board from './Board';
import BoardSwitcher from './BoardSwitcher';
import Keyboard from './Keyboard';

function Game(props) {
    const [boards, setBoards] = useState(Array(props.totalBoardCount).fill({ guesses: [] }));
    const [currentBoardIndex, setCurrentBoardIndex] = useState(0);

    function handlePrevious() {
        if (currentBoardIndex > 0) {
            setCurrentBoardIndex(currentBoardIndex - 1);
        }
    }

    function handleNext() {
        if (currentBoardIndex < props.totalBoardCount - 1) {
            setCurrentBoardIndex(currentBoardIndex + 1);
        }
    }

    return <>
        <TopBar />
        <Board guesses={boards[currentBoardIndex].guesses} />
        <BoardSwitcher
            currentBoardNumber={currentBoardIndex + 1}
            totalBoardCount={props.totalBoardCount}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
        />
        <Keyboard />
    </>
}

export default Game;