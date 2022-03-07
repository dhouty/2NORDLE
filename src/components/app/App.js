import { Game } from '../game/Game';

import './App.css';

export function App() {
  return (
    <div className='app'>
      <Game
        wordLength={5}
        totalGuesses={6}
        totalBoards={2}
      />
    </div>
  );
}
