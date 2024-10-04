import { SectionDinamic, Img, StyledVideo } from './style.js';
import { useState, useEffect, useRef } from 'react';
import Video from '../../assets/management.mp4';
import ImgEdu from '../../assets/eduzinhodinamic.svg';
import Dinamic1 from '../../assets/dinamic1.png';
import Dinamic2 from '../../assets/dinamic2.png';
import Dinamic3 from '../../assets/dinamic3.png';
import Dinamic4 from '../../assets/dinamic4.png';
import Dinamic5 from '../../assets/dinamic5.png';
import Dinamic6 from '../../assets/dinamic6.png';
import Dinamic7 from '../../assets/dinamic7.png';
import Dinamic8 from '../../assets/dinamic8.png';




function Dinamic() {
  

  return (
    <>
      <SectionDinamic id='dinamic'>
       <div className='eduzinho-img'>
        <h2>O dia a dia gerindo uma escola <strong>é dinâmico e repleto de desafios</strong></h2>
        <Img src={ImgEdu} />
       </div>
       <div className='dinamic-list'>
        <div className='dinamic-content'>
          <div className='dinamic-box'>
                <img src={Dinamic1}></img>
                <p>Gestão <strong>financeira</strong> e <strong>inadimplência</strong></p>
              </div>
              <div className='dinamic-box'>
                <img src={Dinamic2}></img>
                <p>Gestão <strong>administrativa</strong> e de <strong>rotinas</strong></p>
              </div>
              <div className='dinamic-box'>
                <img src={Dinamic3}></img>
                <p>Gestão <strong>pedagógica</strong></p>
            </div>
            <div className='dinamic-box'>
                <img src={Dinamic4}></img>
                <p>Problemas de <strong>comunicação eficaz</strong> com pais e equipe</p>
            </div>
        </div>
        <div  className='dinamic-content'>
          <div className='dinamic-box'>
                <img src={Dinamic5}></img>
                <p>Captação de <strong>novos alunos</strong></p>
              </div>
              <div className='dinamic-box'>
                <img src={Dinamic6}></img>
                <p><strong>Retenção</strong> de alunos</p>
              </div>
              <div className='dinamic-box'>
                <img src={Dinamic7}></img>
                <p>Falta de <strong>integração de dados</strong></p>
            </div>
            <div className='dinamic-box'>
                <img src={Dinamic8}></img>
                <p>Dificuldade em tomadas de <strong>decisões certeiras</strong></p>
            </div>
        </div>
       </div>
      </SectionDinamic>
    </>
  );
}

export default Dinamic;
