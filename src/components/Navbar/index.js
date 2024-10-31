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
        <a href='https://edu.conjosa.com.br/' className='btn-system'><li>Login</li></a>
        <a href='#hero'><li>Início</li></a>
        <a href='#dinamic'><li>Dinâmico</li></a>
        <a href='#impacts'><li>Impactos</li></a>
        <a href='#integration'><li>Integração</li></a>
        <a href='#contact'><li>Contato</li></a>
      </BoxItens>
      <BoxItensResponsive style={style}>
        <a href='#hero'><li>Início</li></a>
        <a href='#dinamic'><li>Dinâmico</li></a>
        <a href='#impacts'><li>Impactos</li></a>
        <a href='#integration'><li>Integração</li></a>
        <a href='#contact'><li>Contato</li></a>
        <a href='https://edu.conjosa.com.br/' className='btn-system'><li>Login</li></a>
      </BoxItensResponsive>
      <MenuIcon onClick={handleLogoClick} style={{color: "#fff", fontSize: "2em"}}/>
    </Header>
    </>
  );
}

export default Navbar;