// 2 - links com react router
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
        {/*<Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="contact">Contato</Link>*/}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/contact">Contato</NavLink>
    </nav>
  )
}

export default Navbar