import Information from '../components/Perfil/Information/Information';
import Menu from '../components/Global/Menu';
import Container from '../components/Perfil/Container/Container';
import Contact from '../components/Perfil/Contact/Contact';

function Perfil() {
  return (
    <div className="containerPerfil">
      <Container />
      <Information />
      <Contact />
      <Menu />
    </div>
  )
}

export default Perfil;