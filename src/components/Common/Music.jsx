import style from "./Music.module.css";
import tauz from "../../assets/tauz.jpg";
import dot from "../../assets/dot.svg";

function Music() {
  const sounds = [
    {
      id: 1,
      title: "Perfect",
      artist: "Ed Sheeran",
      image:
        "https://cdns-images.dzcdn.net/images/cover/007b5e41dae0dd99ade00f509db734d4/350x350.jpg",
      category: "Pop",
    },
    {
      id: 2,
      title: "Photograph",
      artist: "Ed Sheeran",
      image: "https://i1.sndcdn.com/artworks-000300249612-tt0oxz-t500x500.jpg",
      category: "Pop",
    },
  ];

  return (
    <section>
      {sounds.map((sound) => {
        return (
          <div className={style.container}>
            <div className={style.containerInfos}>
              <div className={style.infosImagem}>
                <img src={sound.image} alt="Imagem" />
              </div>
              <div className={style.infosTitle}>
                <div>
                  <h3>{sound.title}</h3>
                </div>
                <div className={style.categoryArtist}>
                  <p>
                    <scan className={style.scan}>{sound.category}</scan>
                  </p>
                  <p>{sound.artist}</p>
                </div>
              </div>
            </div>
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
