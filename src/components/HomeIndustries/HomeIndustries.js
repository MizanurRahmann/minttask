import { useState } from "react";
// Components
import Detail from "./Detail";
// Assets
import style from "./HomeIndustries.module.scss";
import { AiOutlineHeart } from "react-icons/ai"
import { RiCheckboxMultipleLine } from "react-icons/ri";

function HomeIndustries() {
  const [option, setOption] = useState(1);

  return (
    <div className={style.industries}>
      <div className={style.industries__text}>
        <p>Driving Enterprise</p>
        <h1>Industries We Serve</h1>
        <p>
          Empowering businesses across verticals by leveraging the power of
          mobility that help accelerate innovation, reduce costs and improve
          performance.
        </p>
      </div>

      <div className={style.content}>
        {/* //////////////////////////////////// */}
        {/* ///////////// Options ///////////// */}
        {/* //////////////////////////////////// */}
        <div className={style.content__options}>
          {/* Option - 1 */}
          <div
            className={
              option === 1
                ? `${style.option} ${style.active}`
                : `${style.option}`
            }
            onClick={() => setOption(1)}
          >
            <div><AiOutlineHeart /></div>
            <div>Healthcare and Fitness</div>
          </div>

          {/* Option - 2 */}
          <div
            className={
              option === 2
                ? `${style.option} ${style.active}`
                : `${style.option}`
            }
            onClick={() => setOption(2)}
          >
            <div><RiCheckboxMultipleLine/></div>
            <div>On-Demand Solutions</div>
          </div>

          {/* Option - 3 */}
          <div
            className={
              option === 3
                ? `${style.option} ${style.active}`
                : `${style.option}`
            }
            onClick={() => setOption(3)}
          >
            <div><RiCheckboxMultipleLine/></div>
            <div>Transport & Automotion</div>
          </div>

          {/* Option - 4 */}
          <div
            className={
              option === 4
                ? `${style.option} ${style.active}`
                : `${style.option}`
            }
            onClick={() => setOption(4)}
          >
            <div><RiCheckboxMultipleLine/></div>
            <div>Enterprice and Mobility</div>
          </div>

          {/* Option - 5 */}
          <div
            className={
              option === 5
                ? `${style.option} ${style.active}`
                : `${style.option}`
            }
            onClick={() => setOption(5)}
          >
            <div><RiCheckboxMultipleLine/></div>
            <div>Food and Restaurent</div>
          </div>
        </div>

        {/* //////////////////////////////////// */}
        {/* ////////////// Detail ////////////// */}
        {/* //////////////////////////////////// */}
        <div className={style.content__detail}>
          <div className={style.wrapper}>
            <Detail option={option} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeIndustries;
