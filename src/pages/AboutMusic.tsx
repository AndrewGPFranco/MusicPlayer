import Menu from "../components/Global/Menu";
import { useLocation } from "react-router-dom";

function AboutMusic() {
  const location = useLocation();
  const { sound } = location.state || {};

  return (
    <div className="AboutMusic">
        <div className="AboutMusicInfos">
            <h1>{sound.title}</h1>
            <h2>{sound.artist}</h2>
            <p className="aboutMusicCategory">{sound.category}</p>
            <img src={sound.image} alt="Capa da Musica" />
        </div>
        <Menu />
    </div>
  );
}

export default AboutMusic;