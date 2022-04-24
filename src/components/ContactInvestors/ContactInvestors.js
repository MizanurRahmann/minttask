import style from './ContactInvestors.module.scss'
import GlobalInvestors from "../GlobalInvestors/GlobalInvestors"

function ContactInvestors() {
  return (
    <div className={style.investors}>
        <h4>Businesses that use Minttask to build </h4>
        <GlobalInvestors />
    </div>
  )
}

export default ContactInvestors