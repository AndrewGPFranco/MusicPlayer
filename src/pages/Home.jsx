import Menu from '../components/Global/Menu.jsx';
import Carousel from '../components/Home/Carousel.jsx';
import Navbar from '../components/Home/Navbar.jsx';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Menu />
    </div>
  )
}

export default Home;