import { useRef, useState } from "react";
// Components
import Detail from "./Detail";
// Assets
import style from "./HomeIndustries.module.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import Slider from "react-slick/lib/slider";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
};

function HomeIndustries() {
  const [option, setOption] = useState(1);
  const slider = useRef(null);

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
        <Slider {...settings} className={style.content__options} ref={slider}>
          {/* Option - 1 */}
          <div className={option === 1 ? `${style.option} ${style.active}` : `${style.option}`} onClick={() => setOption(1)}>
            <div className={style.optionWrapper}>
              <div className={style.logo}>
                <AiOutlineHeart />
              </div>
              <div className={style.text}>
                <div>Healthcare</div>
                <div>& Fitness</div>
              </div>
            </div>
          </div>

          {/* Option - 2 */}
          <div className={option === 2 ? `${style.option} ${style.active}` : `${style.option}`} onClick={() => setOption(2)}>
            <div className={style.optionWrapper}>
              <div className={style.logo}>
                <RiCheckboxMultipleLine />
              </div>
              <div className={style.text}>
                <div>On-Demand</div>
                <div>Solutions</div>
              </div>
            </div>
          </div>

          {/* Option - 3 */}
          <div className={option === 3 ? `${style.option} ${style.active}` : `${style.option}`} onClick={() => setOption(3)}>
            <div className={style.optionWrapper}>
              <div className={style.logo}>
                <RiCheckboxMultipleLine />
              </div>
              <div className={style.text}>
                <div>Transport</div>
                <div> & Automotion</div>
              </div>
            </div>
          </div>

          {/* Option - 4 */}
          <div className={option === 4 ? `${style.option} ${style.active}` : `${style.option}`} onClick={() => setOption(4)}>
            <div className={style.optionWrapper}>
              <div className={style.logo}>
                <RiCheckboxMultipleLine />
              </div>
              <div className={style.text}>
                  <div>Enterprice</div>
                  <div>Mobility</div>
              </div>
            </div>
          </div>

          {/* Option - 5 */}
          <div className={option === 5 ? `${style.option} ${style.active}` : `${style.option}`} onClick={() => setOption(5)}>
            <div className={style.optionWrapper}>
              <div className={style.logo}>
                <RiCheckboxMultipleLine />
              </div>
              <div className={style.text}>
                <div>Food</div>
                <div>& Restaurent</div>
              </div>
            </div>
          </div>
          {/* Option - 1 */}
          <div className={option === 6 ? `${style.option} ${style.active}` : `${style.option}`} onClick={() => setOption(6)}>
            <div className={style.optionWrapper}>
              <div className={style.logo}>
                  <AiOutlineHeart />
                </div>
                <div className={style.text}>
                  <div>Healthcare</div>
                  <div>& Fitness</div>
                </div>
            </div>
          </div>
        </Slider>

        <div className={style.arrowButton} onClick={() => slider?.current?.slickNext()}>
          <BsChevronDown />
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