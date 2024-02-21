// 2 - reaproveitamento de estrutura
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1>React Router</h1>
      <Outlet />
    </>
  )
}

export default App