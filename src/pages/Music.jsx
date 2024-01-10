import Menu from "../components/Global/Menu.jsx";
import play from "../assets/play.png";
import { useState } from "react";

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const music = new Audio("/sounds/couting.mp3");

  const togglePlay = () => {
    if (!isPlaying) {
      music.pause();
      setIsPlaying(false);
    } else {
      music.play();
      setIsPlaying(true);
    }
  }
  
  return (
    <div className="containerMusic">
      <Menu />
      <h1>Press to listen</h1>
      <h1>to your music!</h1>
      <button className="btnPlay2" onClick={togglePlay}>
        <img className="btnPlay" src={play} alt="Icone de Play" />
      </button>
    </div>
  );
};

export default Music;