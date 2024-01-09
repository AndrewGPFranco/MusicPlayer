import style from "./Navbar.module.css";
import ModalComponent from "./ModalComponent.jsx"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <ModalComponent/>
      </nav>
    </>
  );
};

export default Navbar;
