import { useState } from 'react';

import { TopBarView } from 'components/topBar';
import { BoardView } from 'components/board';
import { BoardSwitcherView } from 'components/boardSwitcher';
import { KeyboardView } from 'components/keyboard';
import './Game.css';

import { getRandomWords } from 'utils/dictionary';
import { Board } from 'types';

export function GameView({ wordLength, totalBoards }) {
    const words = getRandomWords(totalBoards, wordLength);
    const [boards] = useState<Board[]>(words.map((word) => ({ word, solved: false, guesses: [] })));
    const [currentBoardIndex, setCurrentBoardIndex] = useState(0);

    function handlePrevious() {
        if (currentBoardIndex > 0) {
            setCurrentBoardIndex(currentBoardIndex - 1);
        }
    }

    function handleNext() {
        if (currentBoardIndex < totalBoards - 1) {
            setCurrentBoardIndex(currentBoardIndex + 1);
        }
    }

    function submitGuess() {

    }

    function removeLetter() {

    }

    function addLetter(letter) {

    }

    return <div className='game'>
        <TopBarView />

        <div className='boards'>
            {boards.map((board) => {
                return <BoardView board={board} />
            })}
        </div>

        <BoardSwitcherView
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            boards={boards}
            currentBoardIndex={currentBoardIndex}
        />

        <KeyboardView
            onSubmit={submitGuess}
            onBackspace={removeLetter}
            onNewLetter={addLetter}
        />
    </div>
}
