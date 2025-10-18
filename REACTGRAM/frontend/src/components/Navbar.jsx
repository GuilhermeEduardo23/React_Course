import "./Navbar.scss";

// Components
import { NavLink, Link } from "react-router-dom";
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from "react-icons/bs";

const Navbar = () => {
  return <nav>
    <Link to="/">ReactGram</Link>
    <form>
        <BsSearch />
        <input type="text" />
        <ul id="nav-links">
            <NavLink to="/"> <BsHouseDoorFill /> Entrar </NavLink>
            <NavLink to="/register">Cadastrar</NavLink>
        </ul>
    </form>
  </nav>;
};

export default Navbar;
