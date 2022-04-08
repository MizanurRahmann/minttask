import style from './PortfolioBanner.module.scss';
import img1 from "../../assets/Services/frame.png";

function PortfolioBanner() {
  return (
    <div className={style.banner}>
        <div className={style.banner__left}>
        <div>
          <p>Mobile App Development</p>
          <h1>
            <div>See how Minttask helps</div>
            <div>teams achieve their goals</div>
          </h1>
        </div>
      </div>

      <div className={style.banner__right}>
        <img src={img1} alt="" className={style.frame} />
      </div>
    </div>
  )
}

export default PortfolioBanner