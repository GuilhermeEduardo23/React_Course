import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
    const itemsMenu = [
        {id: "1", to: "/home", description: "Início"},
        {id: "2", to: "/about", description: "Sobre"}
    ];

  return (
    <nav>
        <NavLink to="/">Mini <span>Blog</span></NavLink>
        <ul>
            {itemsMenu.map(item => (
                <li key={item.id}>
                    <NavLink to={item.to}>
                        {item.description}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar