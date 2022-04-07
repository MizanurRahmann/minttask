import React, { useState } from "react";
// Assets
import style from "./HomeClients.module.scss";
import {AiOutlineCheck, AiOutlineHeart} from "react-icons/ai";
import { RiCheckboxMultipleLine } from "react-icons/ri"
// Components
import ClientsLogo from "./ClientsLogo";
import { Data } from "./Data";
import img22 from "../../assets/Home/Industries/unsplash_9XngoIpxcEo.png";

function HomeClients() {
    const [selected, setSelected] = useState(1)

  return (
    <div className={style.clients}>
      <div className={style.clients__text}>
        <p>Driving Enterprise</p>
        <h1>Clients We Cater</h1>
        <p>
          From ideation and conceptualization to application development,
          ready-to-deploy assets, marketing and support, Codiant delights
          clients of all sizes through agile deliveries and simplified
          solutions.
        </p>
      </div>

      {/* /////////////////////////////////////// */}
      {/* Options */}
      {/* /////////////////////////////////////// */}
      <div className={style.options}>
        <div className={selected === 1 ? `${style.option} ${style.active}` : `${style.option}`} onClick={() => setSelected(1)}>
          <div><AiOutlineHeart /></div>
          <div>Large Enterprises</div>
        </div>
        <div className={selected === 2 ? `${style.option} ${style.active}` : `${style.option}`} onClick={() => setSelected(2)}>
          <div><RiCheckboxMultipleLine /></div>
          <div>Small to Medium Enterprise (SME)</div>
        </div>
        <div className={selected === 3 ? `${style.option} ${style.active}` : `${style.option}`} onClick={() => setSelected(3)}>
          <div><RiCheckboxMultipleLine /></div>
          <div>Small to Medium Enterprise (SME)</div>
        </div>
        <div className={selected === 4 ? `${style.option} ${style.active}` : `${style.option}`} onClick={() => setSelected(4)}>
          <div><RiCheckboxMultipleLine /></div>
          <div>Startups</div>
        </div>
      </div>

      
      {/* /////////////////////////////////////// */}
      {/* Enterprizes */}
      {/* /////////////////////////////////////// */}
      <div className={style.enterprize}>
        <div className={style.image}>
          <img src={Data[selected - 1].image} alt="" />
        </div>
        <div className={style.content}>
          <h3>{Data[selected - 1].head}</h3>
          <div className={style.contentWrapper}>
            <div className={style.contentLeft}>
              <h4>Make Difference with Codiant</h4>
              <ul>
                <li>
                  <div><AiOutlineCheck /></div>
                  <div>Strategic Consulting</div>
                </li>
                <li>
                  <div><AiOutlineCheck /></div>
                  <div>
                    Intellectual property-based mobile technology solutions
                  </div>
                </li>
                <li>
                  <div><AiOutlineCheck /></div>
                  <div>Industry-focused mobility solutions</div>
                </li>
                <li>
                  <div><AiOutlineCheck /></div>
                  <div>
                    Custom apps connected to SAP, Salesforce, CRM and other
                    ERP’s
                  </div>
                </li>
                <li>
                  <div><AiOutlineCheck /></div>
                  <div>Mobile test service</div>
                </li>
              </ul>
            </div>
            <div className={style.contentRight}>
              <h4>Make Difference with Codiant</h4>
              <ul>
                <li>
                  <div><AiOutlineCheck /></div>
                  <div>Strategic Consulting</div>
                </li>
                <li>
                  <div><AiOutlineCheck /></div>
                  <div>
                    Intellectual property-based mobile technology solutions
                  </div>
                </li>
                <li>
                  <div><AiOutlineCheck /></div>
                  <div>Industry-focused mobility solutions</div>
                </li>
                <li>
                  <div><AiOutlineCheck /></div>
                  <div>Enterprise platforms</div>
                </li>
                <li>
                  <div><AiOutlineCheck /></div>
                  <div>
                    Custom apps connected to SAP, Salesforce, CRM and other
                    ERP’s
                  </div>
                </li>
                <li>
                  <div><AiOutlineCheck /></div>
                  <div>Mobile test service</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <ClientsLogo />
      
      <img className={style.absimage} src={img22} alt="" />
    </div>
  );
}

export default HomeClients;
