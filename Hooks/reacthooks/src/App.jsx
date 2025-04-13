import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <BrowserRouter>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">Sobre</Link>
        </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
