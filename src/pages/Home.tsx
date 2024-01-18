import Menu from "../components/Global/Menu";
import Carousel from "../components/Home/Carousel";
import Navbar from "../components/Home/Navbar";
import Card from "../components/Home/Card";
import Title from "../components/Global/Title";
import Moment from "../components/Home/Moment";
import FamousSingers from "../components/Home/FamousSingers";
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
