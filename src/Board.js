import Guess from './Guess';

function Board(props) {
    return <div>
        {props.guesses.map(guess => <Guess letters={guess} />)}
    </div>
}

export default Board;