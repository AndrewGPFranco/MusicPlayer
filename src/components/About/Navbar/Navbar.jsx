import photo from "../../../assets/perfil.jpg";
import github from "../../../assets/github.png";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <img src={photo} alt="Foto de Perfil" />
      <div className={style.icongithub}>
        <img src={github} alt="Logo do Github" />
      </div>
    </div>
  );
}
