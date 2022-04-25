import { Link } from "react-router-dom";
import style from "./HireExperience.module.scss";
import { AiOutlineRight } from "react-icons/ai";

function HireExperience() {
  return (
    <div className={style.hireexperience}>
      <p>Experienced software company</p>
      <h1>Ready To Get Started?</h1>
      <p className={style.secondText}>
        Be it any innovation using IoT technology or need for advanced Hire IOT
        Developers, we, being a 17+ years experienced software company, always
        ready to serve our best-in-class services to our clients that help them
        grow across the world.
      </p>

      <div className={style.infos}>
        <div className={style.info}>
          <h2>200 +</h2>
          <p>MAN-YEAR-EXPERIENCE</p>
        </div>
        <div className={style.info}>
          <h2>6 +</h2>
          <p>YEARS EXPERIENCE</p>
        </div>
        <div className={style.info}>
          <h2>25 +</h2>
          <p>SATISFIED CUSTOMERS</p>
        </div>
        <div className={style.info}>
          <h2>97%</h2>
          <p>CLIENT RETENTION</p>
        </div>
      </div>

      <Link to="/hire">Contact us now <span><AiOutlineRight /></span></Link>
    </div>
  );
}

export default HireExperience;
