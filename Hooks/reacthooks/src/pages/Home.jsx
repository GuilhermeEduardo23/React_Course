// useContext
import { useContext } from "react";

// Package Components
import { SomeContext } from "../components/HookUseContext";
import HookeUseRef from "../components/HookUseRef";
import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";
import HookUseCallback from "../components/HookUseCallback";
import HookUseMemo from "../components/HookUsememo";



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
      <HookUseCallback />
      <HookUseMemo />
    </div>
  );
};

export default Home;
