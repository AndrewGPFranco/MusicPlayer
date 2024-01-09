import Menu from '../components/Global/Menu.jsx';
import Carousel from '../components/Home/Carousel.jsx';
import Navbar from '../components/Home/Navbar.jsx';
import Card from '../components/Home/Card.jsx';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <h1 className="titleHome">Styles Available</h1>
      <Card />
      <Menu />
    </div>
  )
}

export default Home;