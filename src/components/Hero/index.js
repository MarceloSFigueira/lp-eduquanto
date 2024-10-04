import { SectionEdu, Gif } from './style.js';
import Logo from "../../assets/Logo.png";
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Video from '../../assets/title.gif';

function Hero() {

  return (
    <>
    <SectionEdu id='hero'>
        <Gif src={Video} alt="Título animado" />
    </SectionEdu>
    </>
  );
}

export default Hero;