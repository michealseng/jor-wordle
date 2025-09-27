import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../guessInput/guessInput";
import GuessList from "../GuessList/GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(newInput) {
    // add the new guess to the list of guesses
    // update the state
    const newGuess = { value: newInput, id: crypto.randomUUID() };
    const newGuessList = [...guesses, newGuess];
    setGuesses(newGuessList);


  //   // if the guess is correct, show some sort of victory message
  //   if (newGuess === answer) {
  //     alert("Congratulations! You guessed the word!");
  //   }
  //   // if the guess is incorrect and there are 6 guesses, show a loss message
  //   if (newGuess !== answer && newGuessList.length === 6) {
  //     alert(`Sorry, you've used all your guesses. The word was ${answer}.`);
  //   }
  //   // if the guess is incorrect and there are less than 6 guesses, allow them to guess again
  }
  return (
    <>
      <GuessList guessesList={guesses}/>
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
