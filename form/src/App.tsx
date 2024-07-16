import "./App.css";

import MyForm from "./components/MyForm"

function App() {
  return (
    <>
      <MyForm user={{name: 'Guilherme', email: "guilhermeeduardoroo@gmail.com", bio: "Eu sou programador", role: "admin"}}/>
    </>
  )
}

export default App