import React from "react";
import style from "./GlobalIndustries.module.scss";
import { AiOutlineCheck } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

function Detail({ option, data }) {
  return (
    <>
      <div className={style.heading}>
        <h3>{data[option - 1].head}</h3>
        <span><FaHeart /></span>
      </div>
      
      <div className={style.elements}>
        <div className={style.image}>
          <img src={data[option - 1].image} alt="" />
        </div>
        <div className={style.text}>
          <p>{data[option - 1].text}</p>
          <h4>Our Services</h4>
          <ul>
            {data[option - 1].services.map((d) => (
              <li key={d.id}>
                <div>
                  <AiOutlineCheck />
                </div>
                <div>{d.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Detail;
