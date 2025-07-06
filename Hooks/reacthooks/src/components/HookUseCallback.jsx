import { useCallback, useState } from "react";

import List from "./List";

const HookUseCallback = () => {
  const [counter, setCounter] = useState(0);

  //O useCallback também possui array de dependências, para permitir que a função seja executada somente uma vez, quando carrega o componente, ajudando na performance da aplicação.
  const getItemsFromDatabase = useCallback(() => {
    return ["a", "b", "c"];
  }, []);

  return (
    <div>
      <h1>useCallback</h1>
      <List getItems={getItemsFromDatabase} />
      <button onClick={() => setCounter((numCounter) => numCounter + 1)}>
        Alterar!
      </button>
      <p>Contador: {counter}</p>
      <hr />
    </div>
  );
};

export default HookUseCallback;
