import "./Game.css";

interface VerifyLetter {
  verifyLetter(): void;
}

const Game = ({verifyLetter}: VerifyLetter) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetter}>Finalizar Jogo</button>
    </div>
  )
}

export default Game;