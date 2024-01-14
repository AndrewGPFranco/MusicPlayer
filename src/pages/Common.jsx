import Music from '../components/Common/Music.jsx';
import Navbar from '../components/Common/Navbar.jsx';
import Menu from '../components/Global/Menu.jsx';
import Title from '../components/Global/Title.jsx'

function Common() {
  return (
    <div>
      <Navbar />
      <div className='titleFavorites'>
        <Title title="Favorites" />
      </div>
      <Music />
      <Menu />
    </div>
  )
}

export default Common;