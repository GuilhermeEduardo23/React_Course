import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1 - useEffect, sem array de dependência
  useEffect(() => {
    console.log("Estou sendo executado!");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - useEffect, com array de dependência vazio
  useEffect(() => {
    console.log(
      "Serei executado apenas uma vez, pois estou com array de dependência vazio no meu useEffect."
    );
  }, []);

  // 3 - useEffect, com dependência incluída no array
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    anotherNumber > 0 &&
      console.log("Sou executado toda vez que o anotherNumber muda!");
  }, [anotherNumber]);

  // 4 - cleanup no useEffect
  /*useEffect(() => {
    const time = setTimeout(() => {
      console.log("Hello World!");

      setAnotherNumber((number) => number + 1);

      return () => clearTimeout(time);
    }, 2000);
  }, [anotherNumber]);*/

  return (
    <div>
      <h2>useEffect</h2>
      <p>Número: {number}</p>
      <button onClick={changeSomething}>Somar!</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(Math.random())}>
        Clique para mudar o number!
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
