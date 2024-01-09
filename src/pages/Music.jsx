import Menu from "../components/Global/Menu.jsx";
import play from "../assets/play.png";

const Music = () => {
  const music = new Audio("../../public/sounds/couting.mp3");

  const playMusic = () => {
    music.play();
  };
  
  return (
    <div className="containerMusic">
      <Menu />
      <h1>Press to listen to your music!</h1>
      <button className="btnPlay2" onClick={playMusic}>
        <img className="btnPlay" src={play} alt="Icone de Play" />
      </button>
    </div>
  );
};

export default Music;