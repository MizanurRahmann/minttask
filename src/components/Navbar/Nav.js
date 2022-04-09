import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// Styles
import styles from "./Navbar.module.scss";
import logoImage from "../../assets/Group.png";
import logoImage2 from "../../assets/Footer/Group.png";
import { BsChevronDown, BsCodeSquare, BsCart, BsHexagon } from "react-icons/bs";
import { AiOutlineMobile } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
// Components
import DrawerTogglerButton from "./DrawerTogglerButton";

function Nav({ drawerToggleClickHnadler }) {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 400) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleClick = (event) => {
    if (event.target.id.length === 0) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className={!open ? `${styles.nav}` : `${styles.nav} ${styles.navOpen}`}>
      <div className={styles.nav__brand}>
        <Link to="/">{!open ? <img src={logoImage} alt="" /> : <img src={logoImage2} alt="" /> }</Link>
      </div>

      <div className={styles.nav__links}>
        {/* Menu */}
        <div id="dropdown" onClick={() => setMenuOpen(!menuOpen)}>
          Services
          <span><BsChevronDown /></span>
          {menuOpen ? (
            <div className={styles.menus}>
              <div className={styles.menu}>
                <div><AiOutlineMobile /></div>
                <div>Mobile App Development</div>
              </div>
              <div className={styles.menu}>
                <div><FiMonitor /></div>
                <div>Web Development</div>
              </div>
              <div className={styles.menu}>
                <div><BsHexagon /></div>
                <div>Strategic UX Development</div>
              </div>
              <div className={styles.menu}>
                <div><BsCart /></div>
                <div>eCommerce Development</div>
              </div>
              <div className={styles.menu}>
                <div><BsCodeSquare /></div>
                <div>Enterprise Devops</div>
              </div>
            </div>
          ) : null}
        </div>
        <NavLink className={(navData) => (navData.isActive ? styles.activeLink : ``)} to="/vacancies">Vacancies</NavLink>
        <NavLink className={(navData) => (navData.isActive ? styles.activeLink : ``)} to="/case-studies">Our Cases</NavLink>
        <NavLink className={(navData) => (navData.isActive ? styles.activeLink : ``)} to="/about">About us</NavLink>
        <NavLink className={(navData) => (navData.isActive ? styles.activeLink : ``)} to="/contact">Contact</NavLink>
        <DrawerTogglerButton click={drawerToggleClickHnadler} />
      </div>
    </div>
  );
}

export default Nav;
