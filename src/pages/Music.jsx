import Menu from "../components/Global/Menu.jsx";
import play from "../assets/play.png";
import { useState } from "react";

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const music = new Audio("/sounds/couting.mp3");

  let playMusic = () => {
    music.play();
    setIsPlaying(true);
  };

  let pauseMusic = () => {
    music.pause();
    setIsPlaying(false);
  }
  
  return (
    <div className="containerMusic">
      <Menu />
      <h1>Press to listen</h1>
      <h1>to your music!</h1>
      <button className="btnPlay2" onClick={playMusic}>
        <img className="btnPlay" src={play} alt="Icone de Play" />
      </button>
      <button className="btnPause2" onClick={pauseMusic}>Pause</button>
    </div>
  );
};

export default Music;