import { useEffect, useState, useRef } from "react";

const HookeUseRef = () => {
  // 1 - useRef
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  // 2 - useRef e DOM
  const inputRef = useRef();
  const [text, setText] = useState("");

  // Array para guardar os nomes do input e mostrar em uma lista0
  const [name, setName] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setName(arrayNames => [...arrayNames, text]);
    setText("");

    inputRef.current.focus();
  };

  return (
    <div>
      <h1>useRef</h1>
      <p>O componente renderizou {numberRef.current} vezes.</p>
      <p>Counter 1: {counter}</p>
      <button onClick={() => setCounter((numCounter) => numCounter + 1)}>
        Contador A
      </button>
      <p>Counter 2: {counterB}</p>
      <button onClick={() => setCounterB((numCounter) => numCounter + 1)}>
        Contador B
      </button>

      <hr />

      {/* 2 - useRef e DOM */}
      <form onSubmit={handleSubmit}>
        <h2>useRef e DOM</h2>
        <input
          type="text"
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input type="submit" value="Enviar" />
      </form>

      <p>Lista de names:</p>
      <ul>
        {name.map((names, index) => (
            <li key={index}>{names}</li>
        ))}
      </ul>

      <hr />
    </div>
  );
};

export default HookeUseRef;
