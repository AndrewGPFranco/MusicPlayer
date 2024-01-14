import style from "./Music.module.css";
import dot from "../../assets/dot.svg";
import soundsJson from "../../../public/sounds.json";
import { Link } from "react-router-dom";

function Music() {
  const sounds = soundsJson;

  return (
    <section>
      {sounds.map((sound) => {
        return (
          <div className={style.container} key={sound.id}>
            <Link to={`/songs/${sound.id}`}>
                <div className={style.containerInfos}>
                  <div className={style.infosImagem}>
                    <img src={sound.image} alt="Imagem" />
                  </div>
                  <div className={style.infosTitle}>
                    <div>
                      <h3>{sound.title}</h3>
                    </div>
                    <div className={style.categoryArtist}>
                      <p className={style.scan}>{sound.category}</p>
                      <p>{sound.artist}</p>
                    </div>
                  </div>
                </div>
            </Link>
            <div className={style.imagem}>
              <img src={dot} alt="Imagem" />
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Music;
