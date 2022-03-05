import { useState } from 'react';

import { TopBar } from './TopBar';
import { Board } from './Board';
import { BoardSwitcher } from './BoardSwitcher';
import { Keyboard } from './Keyboard';
import { Guess } from './Guess';

import { getRandomWords, isValidWord } from './dictionary';

export function Game({ wordLength, totalGuesses, totalBoards }) {
    const words = getRandomWords(totalBoards, wordLength);
    const [boards, setBoards] = useState(words.map((word) => ({ word, guesses: [] })));
    const [currentBoardIndex, setCurrentBoardIndex] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');

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
        if (isValidWord(currentGuess, wordLength)) {
            for (const board of boards) {
                board.guesses.push(currentGuess);
            }

            setBoards(boards);
        }
    }

    function removeLetter() {
        setCurrentGuess(currentGuess.slice(0, -1));
    }

    function addLetter(letter) {
        setCurrentGuess([...currentGuess, letter]);
    }

    return <div className='game'>
        <TopBar />
        <Board guesses={boards[currentBoardIndex].guesses} />
        <Guess wordLength={wordLength} />
        <BoardSwitcher
            currentBoardNumber={currentBoardIndex + 1}
            totalBoards={totalBoards}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
        />
        <Keyboard
            onSubmit={submitGuess}
            onBackspace={removeLetter}
            onNewLetter={addLetter}
        />
    </div>
}
