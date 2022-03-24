import wordBank from "./wordle-bank.txt";

export const genWord = async (props) => {
  let wordSet;
  let WordsFound;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      wordSet = new Set(wordArr);
      WordsFound = wordSet.filter((words) => words.startsWith(props.onClick));
    });
  return { WordsFound };
};
