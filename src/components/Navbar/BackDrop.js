// Styles
import Style from "./Navbar.module.scss";

const BackDrop = (props) => {
  let designClass;
  
  if (props.drawer) {
    designClass = Style.backdrop;
  }

  return <div className={designClass} onClick={props.click}></div>;
};

export default BackDrop;
