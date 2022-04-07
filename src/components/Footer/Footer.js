import style from "./Footer.module.scss";
import logo from "../../assets/Footer/Group.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className={style.footer}>
        <div className={style.footer__one}>
          <img src={logo} alt="" />
          <p>
            I have done a software project with Codiant Software Technologies
            Pvt. Ltd which was a difficult challenge for b
          </p>
        </div>
        <div className={style.footer__two}>
          <h3>SERVICES</h3>
          <Link to="/">Website Design</Link>
          <Link to="/">Website Development</Link>
          <Link to="/">Content Management</Link>
          <Link to="/">Digital Marketing</Link>
          <Link to="/">Reporting & Analysis</Link>
          <Link to="/">Customer Support</Link>
        </div>
        <div className={style.footer__three}>
          <h3>QUICK LINKS</h3>
          <Link to="/">Services</Link>
          <Link to="/">Expertise</Link>
          <Link to="/">About</Link>
          <Link to="/">Work</Link>
          <Link to="/">Career</Link>
          <Link to="/">Contect</Link>
        </div>
        <div className={style.footer__four}>
          <h3>Get in touch</h3>
          <div>
            <p>
              Vitae amet dolor integer ullamcorper duis etiam nibh scelerisque
              quis dignissim fermentum 440022
            </p>
          </div>
          <div>
            <p>(+91) 702-8001-906</p>
            <p>(+1) 917-829-8442</p>
          </div>
          <div>
            <p>info@technologies.in</p>
            <p>Monday to Friday</p>
          </div>
        </div>
      </div>

      <div className={style.copyright}>
        <p>Copyright © 2022 technology Pvt. Ltd. All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
