import SimpleKeyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import './Keyboard.css';

const theme = 'hg-theme-default keyboard';

const layout = {
    default: [
        'Q W E R T Y U I O P',
        'A S D F G H J K L',
        '{enter} Z X C V B N M {bksp}',
    ],
};

const display = {
    '{bksp}': '⌫',
    '{enter}': '⏎',
}

function Keyboard(props) {
    function onKeyPress(button) {
        if (button === '{enter}') {
            props.onSubmit();
        } else if (button === '{bksp}') {
            props.onBackspace();
        } else {
            props.onNewLetter(button);
        }
    }

    return <SimpleKeyboard
        theme={theme}
        layout={layout}
        display={display}
        onKeyPress={onKeyPress}
    />
}

export default Keyboard;