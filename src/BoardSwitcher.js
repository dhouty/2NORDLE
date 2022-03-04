import './BoardSwitcher.css';

function BoardSwitcher(props) {
    return <div className="board-switcher">
        <div className="previous-button" onClick={props.handlePrevious}>&#60;</div>
        <div className="current-board">{props.currentBoardNumber} / {props.totalBoardCount}</div>
        <div className="next-button" onClick={props.handleNext}>&#62;</div>
    </div>
}

export default BoardSwitcher;