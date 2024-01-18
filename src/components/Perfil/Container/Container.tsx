import style from "./Container.module.css";
import iconMusic from "../../../assets/iconMusic.png";
import iconClock from "../../../assets/iconClock.png";
import profile from '../../../assets/perfil.jpg'

export default function Container() {
  return (
    <section className={style.containerDad}>
      <div className={style.containerOne}>
        <img src={iconMusic} alt="Icone de Music" />
        <p>10 Sounds</p>
      </div>
      <div className={style.photo}>
        <img src={profile} alt="Imagem de Perfil" />
        <h1>Andrew</h1>
      </div>
      <div className={style.containerThree}>
        <img src={iconClock} alt="Icone de Music" />
        <p>10 Sounds</p>
      </div>
    </section>
  );
}
