import perfil from "../../assets/perfil.jpg";
import style from "./Navbar.module.css";
import sounds from "../../../public/sounds.json";
import { Link } from "react-router-dom";

function Navbar() {
  const totalSounds = sounds.length;

  return (
    <nav className={style.container}>
      <Link to={"/profile"}>
        <img src={perfil} alt="Foto de Perfil" />
      </Link>
      <div className={style.infos}>
        <ul>
          <li>
            <strong>@dev_gps</strong>
          </li>
          <li>{totalSounds} Sounds</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
