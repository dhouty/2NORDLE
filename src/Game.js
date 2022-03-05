import { useState } from 'react';

import TopBar from './TopBar';
import Board from './Board';
import BoardSwitcher from './BoardSwitcher';
import Keyboard from './Keyboard';

function Game(props) {
    // const boards = Array(props.totalBoardCount).fill({ guesses: [] });
    const [boards, setBoards] = useState([
        { guesses: [['a', 'b', 'c']]},
        { guesses: [['x', 'y', 'z'], ['f', 'o', 'o'], ['b', 'a', 'r']]},
    ]);

    const [currentGuess, setCurrentGuess] = useState([]);
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

    function submitGuess() {
        console.log('submit');
        for (const board of boards) {
            board.guesses.push(currentGuess);
        }
        console.log(boards);
        setBoards(boards);
    }

    function removeLetter() {
        console.log('remove');
        setCurrentGuess(currentGuess.slice(0, -1));
    }

    function addLetter(letter) {
        console.log('add', letter);
        setCurrentGuess([...currentGuess, letter]);
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
        <Keyboard
            onSubmit={submitGuess}
            onBackspace={removeLetter}
            onNewLetter={addLetter}
        />
    </>
}

export default Game;