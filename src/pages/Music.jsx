import Menu from "../components/Global/Menu.jsx";
import { useState } from "react";

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const music = new Audio("../../public/sounds/couting.mp3");

  let playMusic = () => {
    music.play();
    setIsPlaying(true);
  };
  
  return (
    <div>
      <Menu />
      <h1>Welcome to Music!</h1>
      <button onClick={playMusic}>Play</button>
    </div>
  );
};

export default Music;