import style from "./Music.module.css";
import tauz from "../../assets/tauz.jpg";
import dot from "../../assets/dot.svg";

function Music() {
  return (
    <div className={style.container}>
      <div className={style.containerInfos}>
          <div className={style.infosImagem}>
            <img src={tauz} alt="Imagem" />
          </div>
          <div className={style.infosTitle}>
            <h3>Perfect</h3>
            <p>Ed Sheeran</p>
          </div>
      </div>
      <div className={style.imagem}>
        <img src={dot} alt="Imagem" />
      </div>
    </div>
  );
}

export default Music;
