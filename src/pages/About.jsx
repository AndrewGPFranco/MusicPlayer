import Carousel from '../components/About/Carousel/Carousel.jsx';
import Information from '../components/About/Information/Information.jsx';
import Navbar from '../components/About/Navbar/Navbar.jsx';
import Menu from '../components/Global/Menu.jsx';
import Title from '../components/Global/Title.jsx';

function About() {
  return (
    <div>
      <Navbar />
      <div className='title'>
        <Title title="Technologies Used" />
      </div>
      <Carousel />
      <Information />
      <div className='menuAbout'>
        <Menu />
      </div>
    </div>
  )
}

export default About;