import { useCounterContext } from "../hooks/useCounterContext";

const Contact = () => {
  const { counter } = useCounterContext();

  return (
    <>
        <h1>Contact</h1>
        <p>Valor do counter: {counter}</p>
    </>
  )
}

export default Contact