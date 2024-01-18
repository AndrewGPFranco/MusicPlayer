import Music from '../components/Common/Music';
import Navbar from '../components/Common/Navbar';
import Menu from '../components/Global/Menu';
import Title from '../components/Global/Title';

function Common() {
  return (
    <div>
      <Navbar />
      <div className='titleFavorites'>
        <Title title="Favorites" />
      </div>
      <Music />
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}

export default Common;