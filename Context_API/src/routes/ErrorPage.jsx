import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
        <h1>Página desconhecida!</h1>
        <NavLink to="/">Voltar para o início</NavLink>
    </>
  )
}

export default ErrorPage