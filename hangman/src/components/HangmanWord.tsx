const word = "test";
const guessedLetters = ['t', 'e', 'b']

const HangmanWord = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.25rem",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {word.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: ".1rem solid black" }}>
          <span style={{visibility: guessedLetters.includes(letter) ? "visible" : "hidden"}}>{letter}</span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
