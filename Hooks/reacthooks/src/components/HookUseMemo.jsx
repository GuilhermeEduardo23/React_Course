import { useState, useEffect, useMemo } from "react";

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);

  //const premiumNumbers = ["0", "100", "200"];

  const premiumNumbers = useMemo(() => {
    return ["0", "100", "200"];
  }, []);

  useEffect(() => {
    console.log("Premium numbers was altered");
  }, []);

  return (
    <div>
      <h1>useMemo</h1>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {premiumNumbers.includes(number) ? (
        <p>Você acertou o número</p>
      ) : (
        <p> Você ainda não acertou o número</p>
      )}
      <hr />
    </div>
  );
};

export default HookUseMemo;
