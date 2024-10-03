import { SectionHelp, Img, StyledVideo } from './style.js';
import { useState, useEffect, useRef } from 'react';
import help1 from '../../assets/help1.png';
import help2 from '../../assets/help2.png';
import help3 from '../../assets/help3.png';
import help4 from '../../assets/help4.png';




function Help() {
  

  return (
    <>
      <SectionHelp>
        <div className='title-help'>
            <h2>Como o <strong>EduQuanto pode ajudar sua escola</strong></h2>
        </div>
        <div className='help-container'>
            <div className='help-box'>
                <div className='help-box1'>
                    <img src={help1} className='help-img'></img>
                </div>
                <h3>Termômetro de Desempenho</h3>
                <p>Avaliações detalhadas de Score dos alunos através de histórico escolar</p>
            </div>
            <div className='help-box'>
                <div className='help-box2'>
                    <img src={help2} className='help-img'></img>
                </div>
                <h3>Gestor financeiro</h3>
                <p>Controle de mensalidades e inadimplência</p>
            </div>
            <div className='help-box'>
                <div className='help-box3'>
                    <img src={help3} className='help-img'></img>
                </div>
                <h3>Raio-x Escolar</h3>
                <p>Análise completa de dados acadêmicos e financeiros.</p>
            </div>
            <div className='help-box'>
                <div className='help-box4'>
                    <img src={help4} className='help-img'></img>
                </div>
                <h3>Simulador</h3>
                <p>Projeções de fluxo de caixa, elasticidade de preços e Score de alunos</p>
            </div>
        </div>
      </SectionHelp>
    </>
  );
}

export default Help;
