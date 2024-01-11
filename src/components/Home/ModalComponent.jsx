import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import perfil from "../../assets/perfil.jpg";
import style from "./ModalComponent.module.css";

function ModalComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={style.modal}>
      <Button id="btn" onClick={handleShow}>
        <img src={perfil} alt="Imagem de Perfil do Usuário" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Devfy, Your Music App</Modal.Title>
        </Modal.Header>
        <div className={style.body}>
          <img src={perfil} alt="Foto de Perfil" />
          <h2>Andrew Silva</h2>
        </div>
        <Modal.Footer>
          <Link to="perfil">Access Profile</Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalComponent;
