import './App.css';

import { Outlet, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Mini Blog!</h1>
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default App