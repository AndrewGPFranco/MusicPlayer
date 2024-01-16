import Menu from "../components/Global/Menu.jsx";
import Carousel from "../components/Home/Carousel.jsx";
import Navbar from "../components/Home/Navbar.jsx";
import Card from "../components/Home/Card.jsx";
import Title from "../components/Global/Title.jsx";
import Moment from "../components/Home/Moment.jsx";
import FamousSingers from "../components/Home/FamousSingers.jsx";
import style from "./Home.module.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className={style.Carousel}>
        <Carousel />
      </div>
      <div className={style.titleStyles}>
        <Title title="Styles Available" />
      </div>
      <Card />
      <Menu />
      <div className={style.titleMoments}>
        <Title title="Music of the Moment " />
      </div>
      <Moment />
      <FamousSingers />
    </div>
  );
}

export default Home;
