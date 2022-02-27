import TopBar from './TopBar';
import Board from './Board';
import Keyboard from './Keyboard';
import './App.css';

function App() {
  const words = [
    ['t', 'r', 'a', 'p', 's'],
    ['c', 'o', 'u', 'l', 'd'],
  ];

  return (
    <div className="app">
      <TopBar />
      <Board words={words} />
      <Keyboard />
    </div>
  );
}

export default App;
