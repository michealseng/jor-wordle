import Game from "../Game";
import GuessInput from "../guessInput/guessInput";
import Header from "../Header";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}

export default App;
