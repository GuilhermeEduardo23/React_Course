// Navlink
import { NavLink } from "react-router-dom";

// CSS
import styles from "./Navbar.module.css";

const Navbar = () => {
    const links = [
        {id: 1, to: "/home", name: "Home"},
        {id: 2, to: "/about", name: "Sobre"},
    ];

  return (
    <nav className={styles.navbar}>
        <NavLink to="/home" className={styles.brand}>
            Mini <span>Blog</span>
        </NavLink>

        <ul className={styles.links_list}>
            {links.map(link => (
                <li key={link.id}>
                    <NavLink to={link.to} className={({isActive}) => (isActive ? styles.active : "")}>{link.name}</NavLink>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar