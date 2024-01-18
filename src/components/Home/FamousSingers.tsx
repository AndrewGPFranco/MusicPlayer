import Title from "../Global/Title";
import style from "./FamousSingers.module.css";
import enygma from "../../assets/enygma.jpg";
import basara from "../../assets/basara.jpg";
import tauz from "../../assets/tauz.jpg";

function FamousSingers() {
  return (
    <div className={style.singers}>
      <div>
        <Title title="Geek's Singers" />
      </div>
      <div className={style.images}>
        <img src={enygma} alt="Imagem do Artista" />
        <img src={basara} alt="Imagem do Artista" />
        <img src={tauz} alt="Imagem do Artista" />
      </div>
    </div>
  );
}

export default FamousSingers;
