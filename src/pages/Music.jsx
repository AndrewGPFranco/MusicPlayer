import Menu from "../components/Global/Menu.jsx";
import play from "../assets/play.png";
import { useState } from "react";

function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const music = new Audio("/sounds/couting.mp3");

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
        <img src="https://i.scdn.co/image/ab67616d0000b273bde319f49b9079c727c46410" alt="Capa da Música" />
      </div>
      <span>James Arthur</span>
      <p className="job">Counting my Blessings</p>
      <button className="btnPlay2" onClick={togglePlay}>
        <img className="btnPlay" src={play} alt="Icone de Play" />
      </button>
      <Menu />
    </div>
  );
}

export default Music;
