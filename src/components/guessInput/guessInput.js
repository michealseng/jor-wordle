import React from "react";

function GuessInput() {
  const [currentGuess, setCurrentGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(currentGuess);
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
          setCurrentGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
