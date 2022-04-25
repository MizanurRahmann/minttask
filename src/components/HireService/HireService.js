import Slider from "react-slick";
import { Link } from "react-router-dom";
// Assets
import style from "./HireService.module.scss";
import img1 from "../../assets/Home/Services/Monitor.png";
import img2 from "../../assets/Home/Services/Settings_Future.png";
import img3 from "../../assets/Home/Services/Window_Code_Block.png";
import img4 from "../../assets/Home/Services/Shopping_Cart_02.png";
import img5 from "../../assets/Home/Services/Monitor.png";
import { BsChevronRight, BsArrowRight } from "react-icons/bs";

function HireService() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    speed: 500,
  };

  return (
    <div className={style.services}>
      <div className={style.services__text}>
        <h1>
          Our Hire <span>IOT Developers</span> Services
        </h1>
        <p>
          Our remote Hire IOT Developers deliver reliable IoT solutions that
          cater to the goals and requirements of your business irrespective of
          its size, location or industry vertical. Our Hire IOT Developers
          services are centered around optimally leveraging the robust app
          development framework to build scalable and secure mobile applications
          for global clients.
        </p>
      </div>

      <div className={style.services__all}>
        <Slider {...settings} className={style.slider}>
          {/* Slider 1 */}
          <div className={style.service}>
            <div className={style.service__content}>
              <img src={img5} alt="" />
              <h3>
                <div>Mobile App</div>
                <div>Development</div>
              </h3>
              <p>
                Our complete spectrum of mobile app development and web
                solutions help startups, small-medium enterprises, and
                organizations to create outcome
              </p>
              <Link to="/">
                Explore <span>More</span>{" "}
                <span>
                  <BsArrowRight />
                </span>
              </Link>
            </div>
          </div>
          {/* Slider 2 */}
          <div className={style.service}>
            <div className={style.service__content}>
              <img src={img1} alt="" />
              <h3>
                <div>Web</div>
                <div>Development</div>
              </h3>
              <p>
                Our complete spectrum of mobile app development and web
                solutions help startups, small-medium enterprises, and
                organizations to create outcome
              </p>
              <Link to="/">
                Explore <span>More</span>{" "}
                <span>
                  <BsArrowRight />
                </span>
              </Link>
            </div>
          </div>
          {/* Slider 3 */}
          <div className={style.service}>
            <div className={style.service__content}>
              <img src={img2} alt="" />
              <h3>
                <div>Enterprise</div>
                <div>Devops</div>
              </h3>
              <p>
                Our complete spectrum of mobile app development and web
                solutions help startups, small-medium enterprises, and
                organizations to create outcome
              </p>
              <Link to="/">
                Explore <span>More</span>{" "}
                <span>
                  <BsArrowRight />
                </span>
              </Link>
            </div>
          </div>
          {/* Slider 4 */}
          <div className={style.service}>
            <div className={style.service__content}>
              <img src={img3} alt="" />
              <h3>
                <div>Strategic UX</div>
                <div>Development</div>
              </h3>
              <p>
                Our complete spectrum of mobile app development and web
                solutions help startups, small-medium enterprises, and
                organizations to create outcome
              </p>
              <Link to="/">
                Explore <span>More</span>{" "}
                <span>
                  <BsArrowRight />
                </span>
              </Link>
            </div>
          </div>
          {/* Slider 5 */}
          <div className={style.service}>
            <div className={style.service__content}>
              <img src={img4} alt="" />
              <h3>
                <div>eCommerce</div>
                <div>Development</div>
              </h3>
              <p>
                Our complete spectrum of mobile app development and web
                solutions help startups, small-medium enterprises, and
                organizations to create outcome
              </p>
              <Link to="/">
                Explore <span>More</span>{" "}
                <span>
                  <BsArrowRight />
                </span>
              </Link>
            </div>
          </div>
          {/* Slider 6 */}
          <div className={style.service}>
            <div className={style.service__content}>
              <img src={img5} alt="" />
              <h3>
                <div>Mobile App</div>
                <div>Development</div>
              </h3>
              <p>
                Our complete spectrum of mobile app development and web
                solutions help startups, small-medium enterprises, and
                organizations to create outcome
              </p>
              <Link to="/">
                Explore <span>More</span>{" "}
                <span>
                  <BsArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </Slider>

        <div className={style.globalLink}>
          <Link to="/">
            Hire IOT Developers
            <span>
              <BsChevronRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HireService;