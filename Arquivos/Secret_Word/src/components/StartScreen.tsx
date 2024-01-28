import "./StartScreen.css";

interface StartGame {
    startGame(): void;
}

const StartScreen = ({startGame}: StartGame) => {
  return (
    <div className="start">
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo pra começar a jogar</p>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen