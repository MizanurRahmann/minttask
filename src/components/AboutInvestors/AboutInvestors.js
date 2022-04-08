import style from './AboutInvestors.module.scss';
import s3 from "../../assets/About/s3.png";
import GlobalInvestors from "../GlobalInvestors/GlobalInvestors"

function AboutInvestors() {
  return (
    <div className={style.investors}>
        <h4>Our Investors</h4>
        <GlobalInvestors />
        <img src={s3} alt="" className={style.img} />
    </div>
  )
}

export default AboutInvestors