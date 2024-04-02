import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

  return (
    <div id="error_page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has ocurred.</p>
        <i>{error.statusText || error.message}</i>
    </div>
  )
}

export default ErrorPage