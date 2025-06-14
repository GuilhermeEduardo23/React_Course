// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

const About = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h1>ABOUT</h1>
      <p>Valor do context: {contextValue}</p>
    </div>
  );
};

export default About;
