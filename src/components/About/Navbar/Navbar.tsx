import photo from "../../../assets/perfil.jpg";
import github from "../../../assets/github.png";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <Link to="/profile"><img src={photo} alt="Foto de Perfil" /></Link>
      <div className={style.icongithub}>
        <a href="https://github.com/AndrewGPSilva/MusicPlayerRJS" target="_blank"><img src={github} alt="Logo do Github" /></a>
      </div>
    </div>
  );
}
