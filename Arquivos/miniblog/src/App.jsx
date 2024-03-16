import './App.css';

import { Outlet, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <h1>Mini Blog!</h1>
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App