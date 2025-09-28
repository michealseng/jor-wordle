import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../guessInput/guessInput";
// import GuessList from "../GuessList/GuessList";
import Guess from "../Guess/Guess";
import { checkGuess } from "../../game-helpers";
import KeyboardInput from "../KeyboardInput/KeyboardInput";


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");
  const [keyStatuses, setKeyStatuses] = React.useState([]);

  function handleSubmitGuess(newInput) {
    // add the new guess to the list of guesses
    // update the state
    const validateGuess = checkGuess(newInput, answer);

    const newGuess = {
      value: newInput,
      id: crypto.randomUUID(),
      result: validateGuess
    };
    const newGuessList = [...guesses, newGuess];
    setGuesses(newGuessList);

    if (guesses.length > 4) {
      setGameStatus("sad");
    }

    if (newInput === answer) {
      setGameStatus("happy");
    }
    updateKeyStatuses(validateGuess);
  };

  function updateKeyStatuses(keys) {
    const newKeyStatuses = {...keyStatuses};
    keys.forEach((key) => {
      newKeyStatuses[key.letter] = key.status;
    });
    setKeyStatuses(newKeyStatuses);
    
  }

  return (
    <>
      {/* <GuessList guessesList={guesses}/> */}
      <Guess guesses={guesses} />
      {gameStatus === "running" ? (
        <>
          <GuessInput handleSubmitGuess={handleSubmitGuess} />
          <KeyboardInput keys={keyStatuses} />
        </>
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
