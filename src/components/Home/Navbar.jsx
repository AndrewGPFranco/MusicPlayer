import style from "./Navbar.module.css";
import ModalComponent from "./ModalComponent.jsx";

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
