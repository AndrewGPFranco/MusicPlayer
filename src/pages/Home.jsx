import { Link } from 'react-router-dom';
import Menu from '../components/Global/Menu.jsx';

const Home = () => {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <Link to="/about">About</Link>
      <Menu />
    </div>
  )
}

export default Home;