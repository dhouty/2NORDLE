import { GameView } from 'components/game';
import './App.css';

export function App() {
    return <div className='app'>
        <GameView
            wordLength={5}
            totalGuesses={6}
            totalBoards={2}
        />
    </div>
}
