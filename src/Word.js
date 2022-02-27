import Letter from './Letter';

function Word(props) {
    return <div>
        {props.letters.map(letter => <Letter letter={letter} />)}
    </div>
}

export default Word;