import navbarLogo from "../../assets/icons/Logo.png";
import styles from "./navbar.module.scss";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={navbarLogo} alt="There was a logo" />
      <div className={styles.navItems} id="navbar-default">
        <ul className={styles.navItem}>
          <li>
            <a href="#" className={styles.navLink} aria-current="page">
              About
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Services
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Client
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Blog
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
