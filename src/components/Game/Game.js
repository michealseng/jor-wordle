import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../guessInput/guessInput";
// import GuessList from "../GuessList/GuessList";
import Guess from "../Guess/Guess";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function handleSubmitGuess(newInput) {
    // add the new guess to the list of guesses
    // update the state
    const newGuess = {
      value: newInput,
      id: crypto.randomUUID(),
      result: checkGuess(newInput, answer),
    };
    const newGuessList = [...guesses, newGuess];
    setGuesses(newGuessList);

    if (guesses.length > 4) {
      setGameStatus("sad");
    }

    if (newInput === answer) {
      setGameStatus("happy");
    }
  }
  return (
    <>
      {/* <GuessList guessesList={guesses}/> */}
      <Guess guesses={guesses} />
      {gameStatus === "running" ? (
        <GuessInput handleSubmitGuess={handleSubmitGuess} />
      ) : (
        <div className={`${gameStatus} banner`}>
          {gameStatus === "happy" ? (
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong> {guesses.length} guesses</strong>.
            </p>
          ) : (
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          )}
        </div>
      )}
    </>
  );
}

export default Game;
