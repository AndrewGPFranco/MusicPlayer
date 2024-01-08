import { Link } from "react-router-dom";
import style from "./Menu.module.css";
import iconHome from "../../assets/home.png";
import iconAll from "../../assets/all.png";
import iconGames from "../../assets/games.png";
import iconCommon from "../../assets/music.png";

const Menu = () => {
  return (
    <div className={style.menu}>
      <ul>
        <li>
          <img src={iconHome} alt="Logo de uma Casa Residencial" />
          <Link to="/">Home</Link>
        </li>
        <li>
          <img src={iconAll} alt="Logo de uma Casa Residencial" />
          <Link to="/songs">Songs</Link>
        </li>
        <li>
          <img src={iconGames} alt="Logo de uma Casa Residencial" />
          <Link to="/songs/games">Gamer</Link>
        </li>
        <li>
          <img src={iconCommon} alt="Logo de uma Casa Residencial" />
          <Link to="/songs/common">Common</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;