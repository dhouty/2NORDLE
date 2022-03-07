import './BoardSwitcher.css';

export function BoardSwitcher({ handlePrevious, handleNext, currentBoardNumber, totalBoards }) {
    return <div className='board-switcher'>
        <div className='previous-button' onClick={handlePrevious}>&#60;</div>
        <div className='current-board'>{currentBoardNumber} / {totalBoards}</div>
        <div className='next-button' onClick={handleNext}>&#62;</div>
    </div>
}
