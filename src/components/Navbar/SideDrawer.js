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
          <NavLink className={(navData) => navData.isActive ? Style.activeLink : `` } to="/">Services</NavLink>
          <NavLink className={(navData) => navData.isActive ? Style.activeLink : `` } to="/rates">Vacancies</NavLink>
          <NavLink className={(navData) => navData.isActive ? Style.activeLink : `` } to="/rates">Our Cases</NavLink>
          <NavLink className={(navData) => navData.isActive ? Style.activeLink : `` } to="/about">About us</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideDrawer;
