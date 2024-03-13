import { NavLink } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
        <h1>Página não encontrada!</h1>
        <button>
            <NavLink to="/">Voltar para página inicial</NavLink>
        </button>
    </div>
  )
}

export default ErrorPage;