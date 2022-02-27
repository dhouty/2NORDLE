import Board from './Board';
import Keyboard from './Keyboard';
import './App.css';

function App() {
  const words = [
    ['t', 'r', 'a', 'p', 's'],
    ['c', 'o', 'u', 'l', 'd'],
  ];

  return (
    <div className="App">
      <Board words={words} />
      <Keyboard />
    </div>
  );
}

export default App;
