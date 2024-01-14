import perfil from "../../assets/perfil.jpg";
import style from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={style.container}>
            <img src={perfil} alt="Foto de Perfil" />
            <div className={style.infos}>
                <ul>
                    <li><strong>@dev_gps</strong></li>
                    <li>50 Sounds</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;