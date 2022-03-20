import { useEffect, useMemo, useRef, useState } from 'react';
import _ from 'lodash';

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
    const [currentBoard, setCurrentBoard] = useState({ index: 0, scrollTo: false });
    const boardsRef = useRef<HTMLDivElement[]>([]);

    const observer = useMemo(() => {
        return new IntersectionObserver((entries) => {
            for (const { intersectionRatio, target } of entries) {
                (target as any).intersectionRatio = intersectionRatio;
            }

            const mostVisibleBoard = _.maxBy(boardsRef.current, 'intersectionRatio');
            const mostVisibleBoardIndex = _.indexOf(boardsRef.current, mostVisibleBoard);

            setCurrentBoard({ index: mostVisibleBoardIndex, scrollTo: false });
        }, {
            root: document.querySelector('.boards'),
            threshold: [0, 0.25, 0.5, 0.75, 1],
        });
    }, [])

    useEffect(() => {
        for (const ref of boardsRef.current) {
            observer.observe(ref);
        }

        return () => {
            observer.disconnect();
        };
    }, [observer]);

    useEffect(() => {
        const { index, scrollTo } = currentBoard;

        if (scrollTo) {
            boardsRef.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [currentBoard]);

    function handlePrevious() {
        const { index } = currentBoard;

        if (index > 0) {
            setCurrentBoard({ index: index - 1, scrollTo: true });
        }
    }

    function handleNext() {
        const { index } = currentBoard;

        if (index < totalBoards - 1) {
            setCurrentBoard({ index: index + 1, scrollTo: true });
        }
    }

    function handleShortcut(index: number) {
        setCurrentBoard({ index, scrollTo: true });
    }

    function submitGuess() {

    }

    function removeLetter() {

    }

    function addLetter(letter: string) {

    }

    return <div className='game'>
        <TopBarView />

        <div className='boards'>
            {game.boards.map((board, index) => {
                return <BoardView ref={el => boardsRef.current[index] = el} key={index} board={board} />
            })}
        </div>

        <BoardSwitcherView
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            handleShortcut={handleShortcut}
            boards={game.boards}
            currentBoardIndex={currentBoard.index}
        />

        <KeyboardView
            onSubmit={submitGuess}
            onBackspace={removeLetter}
            onNewLetter={addLetter}
        />
    </div>
}
