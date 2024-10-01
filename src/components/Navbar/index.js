import { Header, BoxItens, Img, BoxItensResponsive } from './style.js';
import Logo from "../../assets/Logo.png";
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // Inicializa como falso
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Inicializa como falso

  const handleLogoClick = () => {
    setIsNavOpen(!isNavOpen); 
    setIsMenuVisible(!isMenuVisible); 
  };

  const style = {
    display: isMenuVisible ? 'flex' : 'none',
  };

  return (
    <>
    <Header>
      <Img src={Logo} />
      <BoxItens>
        <a href='#hero'><li>Início</li></a>
        <a href='#who'><li>Quem Somos</li></a>
        <a href='#services'><li>Serviços</li></a>
        <a href='#areas'><li>Áreas de atuação</li></a>
        <a href='#contato'><li>Contato</li></a>
        <a href='https://jobs.quickin.io/vagas/jobs' target='_blanck'><li>Vagas abertas</li></a>
      </BoxItens>
      <BoxItensResponsive style={style}>
        <a href='#hero'><li>Início</li></a>
        <a href='#who'><li>Quem Somos</li></a>
        <a href='#services'><li>Serviços</li></a>
        <a href='#areas'><li>Áreas de atuação</li></a>
        <a href='#contato'><li>Contato</li></a>
        <a href='https://jobs.quickin.io/vagas/jobs' target='_blanck'><li>Vagas abertas</li></a>
      </BoxItensResponsive>
      <MenuIcon onClick={handleLogoClick} style={{color: "#fff", fontSize: "2em"}}/>
    </Header>
    </>
  );
}

export default Navbar;