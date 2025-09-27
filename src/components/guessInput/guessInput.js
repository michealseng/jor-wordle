import React from "react";

function GuessInput({handleSubmitGuess}) {
  const [currentGuess, setCurrentGuess] = React.useState([]);
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(currentGuess);
        handleSubmitGuess(currentGuess);
        event.target.reset();
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        name="guess-input"
        id="guess-input"
        pattern=".{5}"
        maxLength={5}
        required
        onChange={(event) => {
          const inputValue = event.target.value.toUpperCase();
          setCurrentGuess(inputValue);
        }}
      />
    </form>
  );
}

export default GuessInput;
