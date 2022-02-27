import './Letter.css';

function Letter(props) {
    return <div className="letter">{props.letter?.toUpperCase()}</div>;
}

export default Letter;