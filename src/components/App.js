import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
// import { genWord } from "./Words";
import { useEffect } from "react";
// import WordCounter from "./Words";
import wordBank from "./wordle-bank.txt";

function App() {
  const [value, setValue] = useState("");
  const getValue = () => {
    console.log({ value });
    const genWord = async () => {
      let wordSet;
      let WordsFound = [];
      await fetch(wordBank)
        .then((response) => response.text())
        .then((result) => {
          const wordArr = result.split("\n");
          wordSet = new Set(wordArr);
          //WordsFound = wordSet.filter((words) => words.startsWith({ value }));
          for (let i = 0; i < wordSet.length; i++) {
            WordsFound[i] = wordSet.startsWith("n");
            console.log(WordsFound[i]);
          }
        });
      // console.log({ WordsFound });
    };
  };

  // useEffect(() => {
  //   genWord().then((words) => {
  //     console.log()
  //   });
  // }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <TextField
        id="textValue"
        sx={{ marginRight: 4 }}
        variant="outlined"
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        id="btnGetValue"
        variant="contained"
        sx={{ marginTop: 1 }}
        onClick={getValue}
      >
        Enter
      </Button>
    </div>
  );
}

export default App;
