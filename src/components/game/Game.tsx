import { useState } from 'react';

import { TopBar } from '../topBar/TopBar';
import { Board } from '../board/Board';
import { BoardSwitcher } from '../boardSwitcher/BoardSwitcher';
import { Keyboard } from '../keyboard/Keyboard';
import { Guess } from '../guess/Guess';

import { getRandomWords } from '../../dictionary';
import { GuessModel } from '../../models/GuessModel';

export function Game({ wordLength, totalGuesses, totalBoards }) {
    const words = getRandomWords(totalBoards, wordLength);
    const [boards, setBoards] = useState(words.map((word) => ({ word, guesses: [] })));
    const [currentBoardIndex, setCurrentBoardIndex] = useState(0);
    const [currentGuess, setCurrentGuess] = useState(new GuessModel(wordLength));

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
        if (currentGuess.isValid()) {
            for (const board of boards) {
                const result = currentGuess.compare(board.word);
                board.guesses.push(result);
            }

            setBoards(boards);
        }
    }

    function removeLetter() {
        currentGuess.removeLetter();
        setCurrentGuess(currentGuess);
    }

    function addLetter(letter) {
        currentGuess.addLetter(letter);
        setCurrentGuess(currentGuess);
    }

    return <div className='game'>
        <TopBar />
        <Board guesses={boards[currentBoardIndex].guesses} />
        <Guess letters={currentGuess.guess} />
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
