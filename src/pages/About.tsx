import Carousel from '../components/About/Carousel/Carousel';
import Information from '../components/About/Information/Information';
import Navbar from '../components/About/Navbar/Navbar';
import Menu from '../components/Global/Menu';
import Title from '../components/Global/Title';

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