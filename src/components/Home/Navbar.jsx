import dot from "../../assets/dot.svg";
import perfil from "../../assets/perfil.jpg";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <div className={style.perfil}>
          <img src={perfil} alt="Imagem de Perfil do Usuário" />
        </div>
        <div className={style.about}>
          <img className={style.dot} src={dot} alt="Icone de três pontinhos" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
