// NOT USED ANYMORE

import React from "react";

function GuessList({guessesList}) {
  const guessesArray = [...guessesList];
  return <div className="guess-result">
    {guessesArray.map((guess) => (
      <p className='guess' key={guess.id}>{guess.value}</p>
    ))}
  </div>;
}

export default GuessList;
