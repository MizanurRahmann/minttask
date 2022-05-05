import { useRef, useState } from "react";
// Components
import Detail from "./Detail";
// Assets
import style from "./GlobalIndustries.module.scss";
import { BsChevronDown } from "react-icons/bs";
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

function GlobalIndustries({ data }) {
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
          {data.map((data) => (
            <div
              className={
                option === data.id
                  ? `${style.option} ${style.active}`
                  : `${style.option}`
              }
              onClick={() => setOption(data.id)}
            >
              <div className={style.optionWrapper}>
                <div className={style.logo}>{data.optionLogo}</div>
                <div className={style.text}>
                  <div>{data.optionName[0]}</div>
                  <div>{data.optionName[1]}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div
          className={style.arrowButton}
          onClick={() => slider?.current?.slickNext()}
        >
          <BsChevronDown />
        </div>

        {/* //////////////////////////////////// */}
        {/* ////////////// Detail ////////////// */}
        {/* //////////////////////////////////// */}
        <div className={style.content__detail}>
          <div className={style.wrapper}>
            <Detail option={option} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalIndustries;
