import style from "./Navbar.module.css";
import ModalComponent from "./ModalComponent.js";

function Navbar() {
  return (
    <>
      <nav className={style.navbar}>
        <ModalComponent />
      </nav>
    </>
  );
};

export default Navbar;
