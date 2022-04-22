import style from "./PorfolioAproject.module.scss";
import p1 from "../../assets/Portfolio/p1.png";
import { Link } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";

function PorfolioAproject() {
  return (
    <div className={style.aproject}>
      <div className={style.wrapper}>
        <div className={style.wrapper__left}>
          <img src={p1} alt="" />
        </div>
        <div className={style.wrapper__right}>
          <p>Mobile App Development Solutions</p>
          <h3>
            <div>Android, iOS & Flutter App</div>
            <div>Development</div>
          </h3>
          <div className={style.line}></div>
          <p className={style.text}>
            Being a rising name in the IT industry across the world, we deliver
            quality services in a timely <br /> fashion to help our clients gain a
            leading.
            <br />
            edge in this competitive market.
          </p>

          <Link to="/portfolio">View full project <span><CgArrowRight/></span></Link>
        </div>
      </div>
    </div>
  );
}

export default PorfolioAproject;
