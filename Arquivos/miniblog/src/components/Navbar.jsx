import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
    const itemsMenu = [
        {id: "1", to: "/home", description: "Início"},
        {id: "2", to: "/login", description: "Entrar"},
        {id: "3", to: "/register", description: "Cadastrar"},
        {id: "4", to: "/about", description: "Sobre"}
    ];

  return (
    <nav className={styles.navbar}>
        <NavLink to="/">Mini <span>Blog</span></NavLink>
        <ul className={styles.links_list}>
            {itemsMenu.map(item => (
                <li key={item.id}>
                    <NavLink to={item.to} className={({ 
                        isActive 
                    }) => (isActive ? styles.active : "")}>
                        {item.description}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar