import Menu from '../components/Global/Menu.jsx';
import Carousel from '../components/Home/Carousel.jsx';
import Navbar from '../components/Home/Navbar.jsx';
import Card from '../components/Home/Card.jsx';
import Title from '../components/Global/Title.jsx';

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Title title="Styles Available" />
      <Card />    
      <Menu />
      <Title title="Most Popular Artists " />
    </div>
  )
}

export default Home;