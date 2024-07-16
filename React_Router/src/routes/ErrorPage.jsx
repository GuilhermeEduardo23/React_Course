import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <>
        <h1>Erro 404</h1>
        <p>Esta página não existe!</p>
        <button>
          <Link to="/">Voltar para página inicial</Link>
        </button>
    </>
  )
}

export default ErrorPage