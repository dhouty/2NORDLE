import Word from './Word';

function Board(props) {
    return <div>
        {props.words.map(word => <Word letters={word} />)}
    </div>
}

export default Board;