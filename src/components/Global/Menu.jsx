import { Link, useLocation } from "react-router-dom";
import style from "./Menu.module.css";
import iconHome from "../../assets/home.png";
import iconAll from "../../assets/all.png";
import iconGames from "../../assets/games.png";
import iconCommon from "../../assets/music.png";
import iconAbout from "../../assets/about.png";

function Menu() {
  const location = useLocation();

  return (
    <div className={style.menu}>
      <ul>
        <li className={location.pathname === "/" ? style.active : ""}>
          <img src={iconHome} alt="Logo de uma Casa Residencial" />
          <Link to="/">Home</Link>
        </li>
        <li
          className={location.pathname === "/songs/common" ? style.active : ""}
        >
          <img src={iconCommon} alt="Logo de uma Casa Residencial" />
          <Link to="/songs/common">Common</Link>
        </li>
        <li className={location.pathname === "/songs" ? style.active : ""}>
          <img src={iconAll} alt="Logo de uma Casa Residencial" />
          <Link to="/songs">Songs</Link>
        </li>
        <li
          className={location.pathname === "/about" ? style.active : ""}
        >
          <img src={iconAbout} alt="Logo de uma Casa Residencial" />
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
