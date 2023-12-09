import React, { useState, useEffect } from "react";

function Typewriter() {
  const words = ["coding", "building projects", "working on new ideas"];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [pink, setPink] = useState(true);

  function type() {
    const currentWord = words[wordIndex];
    const shouldDelete = isDeleting ? 1 : -1;

    setText((current) =>
      currentWord.substring(0, current.length - shouldDelete)
    );

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setPink(!pink);
      setWordIndex((current) => (current + 1) % words.length);
    }
  }

  useEffect(() => {
    const timer = setTimeout(type, isDeleting ? 100 : 200);

    return () => clearTimeout(timer);
  }, [wordIndex, isDeleting, text]);

  // Cursor styles
  const cursorStyles = {
    display: "inline-block",
    width: "2px", // Adjust the width of the cursor
    height: "0.8em",
    backgroundColor: "white", // Adjust the color of the cursor
    marginLeft: "4px", // Adjust the space between the text and cursor
    animation: "blink 1s infinite", // Blinking animation
  };

  return (
    <>
      <h1
        style={{
          display: "inline-block",
          color: `${pink ? "#C37AEE" : "#D14BAA"}`,
        }}
      >
        {text}
      </h1>
      {!isDeleting && <span style={cursorStyles}></span>}
    </>
  );
}

export default Typewriter;
