import { Link, NavLink} from "react-router-dom";
// Styles
import Style from "./Navbar.module.scss";
import logoImage from "../../assets/Group.png";


const SideDrawer = ({ show }) => {
  // SELECT DRAWER CLASS
  let drawerClass = `${Style.side__drawer}`;
  if (show) {
    drawerClass = `${Style.side__drawer} ${Style.open}`;
  }
  
  return (
    <>
      <nav className={drawerClass}>
        <div className={Style.Drawerheading}>
          <Link to="/"><img src={logoImage} alt="" /></Link>
        </div>
        <div className={Style.drawerLink}>
          <div className={Style.up}>
          <NavLink className={(navData) => navData.isActive ? Style.activeLink : `` } to="/hire">Hire Developers</NavLink>
          <NavLink className={(navData) => navData.isActive ? Style.activeLink : `` } to="/about">About us</NavLink>
          <NavLink className={(navData) => navData.isActive ? Style.activeLink : `` } to="/portfolio">Portfolio</NavLink>
          <NavLink className={(navData) => navData.isActive ? Style.activeLink : `` } to="/blog">Blog</NavLink>
          <NavLink className={(navData) => navData.isActive ? Style.activeLink : `` } to="/technologies">Technologies</NavLink>
          <NavLink className={(navData) => navData.isActive ? Style.activeLink : `` } to="/contact">Contact</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideDrawer;
