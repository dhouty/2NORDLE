import './Letter.css';

function Letter(props) {
    return <div className="Letter">{props.letter?.toUpperCase()}</div>;
}

export default Letter;