import dot from "../../assets/dot.svg";
import perfil from "../../assets/perfil.jpg";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <div className={style.perfil}>
          <Link to="/perfil"><img src={perfil} alt="Imagem de Perfil do Usuário" /></Link>
        </div>
        <div className={style.about}>
          <Link to="/about"><img className={style.dot} src={dot} alt="Icone de três pontinhos" /></Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
