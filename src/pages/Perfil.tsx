import Menu from '../components/Global/Menu';
import Banner from "../components/Perfil/Banner/Banner";
import Container from '../components/Perfil/Container/Container';

function Perfil() {
  return (
    <div className="containerPerfil">
      <Banner />
      <Container />
      <Menu />
    </div>
  )
}

export default Perfil;