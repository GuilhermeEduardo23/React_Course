// 2 - links com react router
import { Link } from "react-router-dom";

import "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="contact">Contato</Link>
    </nav>
  )
}

export default Navbar