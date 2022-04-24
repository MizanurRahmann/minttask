import style from "./PortfolioClients.module.scss";
import GlobalInvestors from "../GlobalInvestors/GlobalInvestors";

function PortfolioClients() {
  return (
    <div className={style.investors}>
      <h4>Our investors </h4>
      <GlobalInvestors />
    </div>
  );
}

export default PortfolioClients;
