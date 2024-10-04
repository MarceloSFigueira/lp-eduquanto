import { SectionIntegration, Img, StyledVideo } from './style.js';
import { useState, useEffect, useRef } from 'react';
import Integrations1 from '../../assets/integrations1.png';
import Integrations2 from '../../assets/integrations2.png';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Engine from '../../assets/engine.png';

function Integration() {
  

  return (
    <>
      <SectionIntegration id='integration'>
       <div className='eduzinho-img'>
            <h2>Integração total com outros sistemas</h2>
            <h3>Nossa plataforma se conecta com os <strong>principais sistemas de gestão escolar, garantindo que todos os dados críticos de sua instituição estejam</strong> centralizados e acessíveis de maneira simples e rápida.</h3>
            <img src={Engine} className='engine'></img>
       </div>
       <div className='integration-list'>
            <div className='integration-box'>
                <div className='integration-box-icon'>
                    <ArrowBackIosNewIcon />
                    <h3>ERP</h3>
                    <ArrowForwardIosIcon />
                </div>
                <img src={Integrations1} />
            </div>
            <div className='line'></div>
            <div className='integration-box'>
                <div className='integration-box-icon'>
                    <ArrowBackIosNewIcon />
                    <h3>Inadimplência Zero</h3>
                    <ArrowForwardIosIcon />
                </div>
                <img src={Integrations2} /> 
            </div>
        
       </div>
      </SectionIntegration>
    </>
  );
}

export default Integration;
