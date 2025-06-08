import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = "João";
  const [name, setName] = useState("João");
  const [nameRemoved, setNameRemoved] = useState(false);

  const changeNames = () => {
    setName("Guilherme");
    setNameRemoved(false);
  };

  const removeName = () => {
    setName("");
    setNameRemoved(true);
  };

  // 2 - useState e input
  const [age, setAge] = useState(18);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(age);
  }

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>

      {nameRemoved ? (
        <p>Não há mais nenhum nome aqui!</p>
      ) : (
        <p>useState: {name}</p>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "20%",
          margin: "10px",
        }}
      >
        <button onClick={changeNames}>Clique aqui para alterar o nome!</button>

        {!nameRemoved && (
          <button onClick={removeName}>
            Clique aqui para remover o nome alterado!
          </button>
        )}

        {/* 2 - useState e input */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Digite sua idade"
          />
          <button type="submit">Enviar</button>
        </form>
        <p>Você tem {age} anos!</p>
      </div>
    </div>
  );
};

export default HookUseState;
