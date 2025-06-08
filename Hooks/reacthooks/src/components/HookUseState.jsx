import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = "João";
  const [name, setName] = useState("João");
  
  const changeNames = () => {
    setName("Guilherme");
    setNameRemoved(false);

  };
  
  const [nameRemoved, setNameRemoved] = useState(false);

  const removeName = () => {
    setName("");
    setNameRemoved(true);
  };

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
      </div>
    </div>
  );
};

export default HookUseState;
