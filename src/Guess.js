import Letter from './Letter';

function Guess(props) {
    return <div>
        {props.letters.map(letter => <Letter letter={letter} />)}
    </div>
}

export default Guess;