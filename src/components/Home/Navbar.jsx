import style from "./Navbar.module.css";
import ModalComponent from "./ModalComponent.jsx";
import { Link } from "react-router-dom";
import dot from "../../assets/dot.svg";

const Navbar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <ModalComponent />
        <div className="about">
          <Link to="/about">
            <img src={dot} alt="Icon de 3 pontinhos" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
