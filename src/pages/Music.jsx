import Menu from "../components/Global/Menu.jsx";

const Music = () => {
  const music = new Audio("../../public/sounds/couting.mp3");

  const playMusic = () => {
    music.play();
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