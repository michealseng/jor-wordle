import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const wordLength = 5;

function Guess({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        const colID = `col-${index}`;
        const guessAnswer = guesses?.[index];
        return (
          <p className="guess" key={colID}>
            {range(wordLength).map((cellIndex) => {
              const cellID = `cell-${index}-${cellIndex}`;
              const guessAnswerLetter = guessAnswer?.result?.[cellIndex];
              const cellClass = guessAnswer
                ? `cell ${guessAnswerLetter.status}`
                : "cell";
              const cellLetter = guessAnswer ? guessAnswerLetter.letter : "";
              return (
                <span className={cellClass} key={cellID}>
                  {cellLetter}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default Guess;
