import { useState } from 'react';

import { TopBarView } from 'components/topBar';
import { BoardView } from 'components/board';
import { BoardSwitcherView } from 'components/boardSwitcher';
import { KeyboardView } from 'components/keyboard';
import './Game.css';

import { GameModel } from 'models/GameModel';

export interface GameProps {
    wordLength: number;
    totalGuesses: number;
    totalBoards: number;
}

export function GameView({ wordLength, totalGuesses, totalBoards }) {
    const [game] = useState(new GameModel(wordLength, totalGuesses, totalBoards));
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
            {game.boards.map((board, index) => {
                return <BoardView key={index} board={board} />
            })}
        </div>

        <BoardSwitcherView
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            boards={game.boards}
            currentBoardIndex={currentBoardIndex}
        />

        <KeyboardView
            onSubmit={submitGuess}
            onBackspace={removeLetter}
            onNewLetter={addLetter}
        />
    </div>
}
