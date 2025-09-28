import { QWERTY } from "../../constants";

function KeyboardInput({ keys }) {
  return (
    <div className="keyboard">
      {QWERTY.map((row) => (
        <div className="keyboard-row" key={row.join("")}>
          {row.map((index) => {
            const keyClass = keys[index] ? `keyboard-key ${keys[index]}` : 'keyboard-key';
            return (
              <span className={keyClass} key={index}>
                {index}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default KeyboardInput;
