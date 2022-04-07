import { useRef } from "react";
import Slider from "react-slick/lib/slider";
import FeedBack from "./FeedBack";
import style from "./HomeFeedback.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import img22 from "../../assets/Home/Services/unsplash_Bl-LiSJOnlY.png";

function HomeFeedback() {
  const slider = useRef(null);

  const settings = {
    dots: false,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className={style.feedback}>
      <div className={style.feedback__text}>
        <p>Why Choose us</p>
        <h1>Client Feedbacks</h1>
        <p>
          I have done a software project with Codiant Software Technologies Pvt.
          Ltd which was a difficult challenge for both of us because of the
          language differences and the wide scope of work (web, IOS and
          Android). However, they have delivered the project as per my
          expectation and maybe better. I will keep working with them in other
          project, and I recommended them as one of the best offshore tech
          companies.
        </p>
      </div>

      <div className={style.slider}>
        <Slider className={style.allFeedBacks} {...settings} ref={slider}>
          <FeedBack id={1} />
          <FeedBack id={2} />
          <FeedBack id={3} />
          <FeedBack id={4} />
          <FeedBack id={5} />
        </Slider>

        <div
          className={style.sliderArrow1}
          onClick={() => slider?.current?.slickPrev()}
        >
          <BsChevronLeft />
        </div>
        <div
          className={style.sliderArrow2}
          onClick={() => slider?.current?.slickNext()}
        >
          <BsChevronRight />
        </div>
      </div>

      <img className={style.absimage} src={img22} alt="" />
    </div>
  );
}

export default HomeFeedback;
