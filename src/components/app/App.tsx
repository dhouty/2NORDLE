import { GameView } from 'components/game';
import './App.css';

export function AppView() {
    return <div className='app'>
        <GameView
            wordLength={5}
            totalGuesses={6}
            totalBoards={8}
        />
    </div>
}
