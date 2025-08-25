import { useEffect, useState } from "react";
// Guided by some blog post out there
// Pretty common way to implement anyways

// TODO: make cursor blink optional (move styles to here instead of index.css)
function TypeWriterText({
  words = ["You forgot", "to add", "a words array..."],
  delay = 100,
  delayHoldWord = 3000,
  delayNextWord = 1000,
  delayDelete = 50,
  loop = true,
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [state, setState] = useState("typing"); // typing or deleting
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    // console.log(
    //   state,
    //   currentWordIndex,
    //   "curr index",
    //   currentCharIndex,
    //   "target length",
    //   currentWord.length,
    //   displayText,
    // );
    let timeout;

    if (state === "typing") {
      if (currentCharIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + currentWord[currentCharIndex]);
          setCurrentCharIndex((prev) => prev + 1);
        }, delay);
      } else if (currentCharIndex === currentWord.length) {
        // then the word is fully displayed

        // If more words remaining, or on last woord and looping is enabled,
        // start deleting the word
        if (
          currentWordIndex < words.length - 1 ||
          (currentWordIndex === words.length - 1 && loop)
        ) {
          timeout = setTimeout(() => {
            setState("deleting");
          }, delayHoldWord);
        }
      }
    } else if (state === "deleting") {
      if (currentCharIndex >= 0) {
        // while there still is text (substring form 0, x > 0) is at least 1 length
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, currentCharIndex));
          setCurrentCharIndex((prev) => prev - 1);
        }, delayDelete);
      } else if (currentCharIndex === -1) {
        // displaying empty string -- so time for next word
        timeout = setTimeout(() => {
          setState("typing");
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setDisplayText("");
          setCurrentCharIndex(0);
        }, delayNextWord);
      }
    }
    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    currentWordIndex,
    delay,
    delayDelete,
    delayHoldWord,
    delayNextWord,
    displayText,
    loop,
    state,
    words,
  ]);
  return <span className="caret">{displayText}</span>;
}

export default TypeWriterText;
