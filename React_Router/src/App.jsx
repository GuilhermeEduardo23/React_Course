// 2 - reaproveitamento de estrutura
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchForm from "./routes/SearchForm";

function App() {
  return (
    <>
      {/* 2 - links com react router */}
      <h1 style={{textAlign: "center"}}>React Router</h1>
      <Navbar />
      {/* 9 - search */}
      <SearchForm />
      <Outlet />
    </>
  )
}

export default App