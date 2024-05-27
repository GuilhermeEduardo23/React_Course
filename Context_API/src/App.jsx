import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <h1 style={{textAlign: "center"}}>Context API</h1>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App