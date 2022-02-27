import SimpleKeyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

const layout = {
    default: [
        'Q W E R T Y U I O P',
        'A S D F G H J K L',
        '{enter} Z X C V B N M {bksp}',
    ],
};

const display = {
    '{bksp}': 'DELETE',
    '{enter}': 'SUBMIT',
}

function Keyboard() {
    return <SimpleKeyboard layout={layout} display={display} />
}

export default Keyboard;