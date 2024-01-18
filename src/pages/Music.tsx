import Menu from "../components/Global/Menu";
import play from "../assets/play.png";
import pause from "../assets/pause.png";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Music() {
  const location = useLocation();
  const { sound } = location.state || {};

  const [isPlaying, setIsPlaying] = useState(false);
  const [music, setMusic] = useState(new Audio("/sounds/counting.mp3"));

  useEffect(() => {
    setMusic(new Audio(sound.audio));
  }, [sound]);

  const togglePlay = () => {
    if (!isPlaying) {
      music.play();
      setIsPlaying(true);
    } else {
      music.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="card">
      <div className="card-border-top"></div>
      <div className="img">
        <img src={sound.image} alt="Capa da Música" />
      </div>
      <span>{sound.artist}</span>
      <p className="job">{sound.title}</p>
      <button className="btnPlay2" onClick={togglePlay}>
        {isPlaying ? (
          <img className="btnPlay" src={pause} alt="Icone de Pause" />
        ) : (
          <img className="btnPlay" src={play} alt="Icone de Play" />
        )}
      </button>
      <Menu />
    </div>
  );
}

export default Music;
