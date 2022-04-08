import { Link } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import style from "./PortfolioProjects.module.scss";

function Projects({ projects }) {
  return (
    <>
      <div className={style.allprojects}>
        {projects.map((prjct) => (
          <div className={style.project}>
            <div className={style.image}>
              <img src={prjct.banner} alt="" />
            </div>
            <div className={style.text}>
              <h4>{prjct.name}</h4>
              <p>{prjct.text}</p>
              <Link to="/">View Full Projects</Link>
            </div>
          </div>
        ))}
      </div>

      <div className={style.pagination}>
        <div>
          <BsChevronLeft />
        </div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>..</div>
        <div>9</div>
        <div>10</div>
        <div>
          <BsChevronRight />
        </div>
      </div>
    </>
  );
}

export default Projects;
