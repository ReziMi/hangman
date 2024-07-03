type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

const HangmanWord = ({
  guessedLetters = [],
  wordToGuess = "",
}: HangmanWordProps) => {
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
      {wordToGuess.split("").map((letter, index) => (
        <span
          key={index}
          style={{
            borderBottom: letter !== " " ? ".1rem solid black" : "none",
          }}
        >
          <span
            style={{
              visibility: guessedLetters.includes(letter.toLowerCase())
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
