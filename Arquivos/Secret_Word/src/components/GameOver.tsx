import "./GameOver.css";

interface Retry {
  retry(): void;
}

const GameOver = ({retry}: Retry) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retry}>Resetar Jogo</button>
    </div>
  )
}

export default GameOver;