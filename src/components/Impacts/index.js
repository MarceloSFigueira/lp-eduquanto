import { SectionImpacts, Img, StyledVideo } from './style.js';
import { useState, useEffect, useRef } from 'react';
import Video from '../../assets/management.mp4';
import ImgEdu from '../../assets/eduzinho.svg';
import Impacts1 from '../../assets/impact1.png';
import Impacts2 from '../../assets/impact2.png';
import Impacts3 from '../../assets/impact3.png';



function Impacts() {
  

  return (
    <>
      <SectionImpacts id='impacts'>
        <div className='title-impacts'>
            <h2>Essas questões, quando não são bem visualizadas e analisadas, levam a <strong>ineficiências, insatisfação</strong> e <strong>perda de recursos</strong></h2>
        </div>
        <div className='impacts-content'>
            <h2>IMPACTOS PROFUNDOS</h2>
        </div>
        <div className='impacts-container'>
            <div className='impact-box'>
                <div className='impacts-box1'>
                    <img src={Impacts1} className='impacts-img'></img>
                </div>
                <h3>Financeiro</h3>
                <p>O aumento da inadimplência impacta diretamente na saúde financeira da escola</p>
            </div>
            <div className='impact-box'>
                <div className='impacts-box2'>
                    <img src={Impacts2} className='impacts-img'></img>
                </div>
                <h3>Acadêmico</h3>
                <p>Desempenho insatisfatório dos alunos afeta a reputação e resultados</p>
            </div>
            <div className='impact-box'>
                <div className='impacts-box3'>
                    <img src={Impacts3} className='impacts-img'></img>
                </div>
                <h3>Operacional</h3>
                <p>Processos desalinhados dificultam a administração e processos eficazes</p>
            </div>
        </div>
      </SectionImpacts>
    </>
  );
}

export default Impacts;
