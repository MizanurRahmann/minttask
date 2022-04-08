import style from './PortfolioClients.module.scss';
import s3 from "../../assets/Portfolio/s1.png";
import GlobalInvestors from "../GlobalInvestors/GlobalInvestors"

function PortfolioClients() {
  return (
    <div className={style.investors}>
        <h4>Businesses that use Minttask to build </h4>
        <GlobalInvestors />
        <img src={s3} alt="" className={style.img} />
    </div>
  )
}

export default PortfolioClients