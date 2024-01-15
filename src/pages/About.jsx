import Carousel from '../components/About/Carousel/Carousel.jsx';
import Information from '../components/About/Information/Information.jsx';
import Navbar from '../components/About/Navbar/Navbar.jsx';
import Menu from '../components/Global/Menu.jsx';
import Title from '../components/Global/Title.jsx';

function About() {
  return (
    <div>
      <Navbar />
      <Title title="Technologies Used" />
      <Carousel />
      <Information />
      <Menu />
    </div>
  )
}

export default About;