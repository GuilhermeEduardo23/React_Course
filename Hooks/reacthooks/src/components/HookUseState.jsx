import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let username = "Guilherme";

  const [name, setName] = useState("Guilherme");

  const changeNames = () => {
    // A variável username, não é alterada, pois o React não permite
    username = "Vitor Souza";
    console.log(name);
    if (name === "Guilherme") setName("Vitor Souza");
    else setName("Guilherme");
  };

  // 2 - useState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(age);
  };

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {username}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes!</button>
      {/* 2 - useState e input */}
      <p>Digite a sua idade:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p>
          {name}, você tem {age} anos.
        </p>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default HookUseState;
