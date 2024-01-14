import perfil from "../../assets/perfil.jpg";
import style from "./Navbar.module.css";
import sounds from "../../../public/sounds.json";

function Navbar() {
    const totalSounds = sounds.length;

    return (
        <nav className={style.container}>
            <img src={perfil} alt="Foto de Perfil" />
            <div className={style.infos}>
                <ul>
                    <li><strong>@dev_gps</strong></li>
                    <li>{ totalSounds } Sounds</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;