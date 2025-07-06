// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";
import HookeUseRef from "../components/HookUseRef";

import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";



const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h1>HOME</h1>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      <hr />
      <HookeUseRef />
    </div>
  );
};

export default Home;
