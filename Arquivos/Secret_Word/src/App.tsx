// CSS
import "./App.css";

// React
import { useCallback, useEffect, useState } from "react";

// Data
import { wordsList } from "./data/words";

// Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [picketCategory, setPicketCategory] = useState("");
  const [letters, setLetters] = useState([]);
  
  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // Pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return {word, category};
  } 

  // Starts the secret word game
  const startGame = () => {
    // Pick Word and Pick Category
    const {word, category} = pickWordAndCategory();

    // Create an array of letters
    let wordLetters: string[] = word.split("");
    
    wordLetters = wordLetters.map(l => l.toLowerCase());

    // Fill states
    setPickedWord(word);
    setPicketCategory(category);
    setLetters(letters);

    setGameStage(stages[1].name);
  }

  // Process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  // Restarts the game
  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter}/>}
      {gameStage === "end" && <GameOver retry={retry}/>}
    </div>
  )
}

export default App