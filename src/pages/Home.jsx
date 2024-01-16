import Menu from "../components/Global/Menu.jsx";
import Carousel from "../components/Home/Carousel.jsx";
import Navbar from "../components/Home/Navbar.jsx";
import Card from "../components/Home/Card.jsx";
import Title from "../components/Global/Title.jsx";
import Moment from "../components/Home/Moment.jsx";
import FamousSingers from "../components/Home/FamousSingers.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Title title="Styles Available" />
      <Card />
      <Menu />
      <Title title="Music of the Moment " />
      <Moment />
      <FamousSingers />
    </div>
  );
}

export default Home;
