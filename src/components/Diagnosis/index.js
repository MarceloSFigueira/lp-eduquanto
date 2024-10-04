import { SectionDiagnosis, Img, StyledVideo } from './style.js';
import { useState, useEffect, useRef } from 'react';
import ImgLamp from '../../assets/lamp.png';
import DiagnosisImg from '../../assets/diagnosis.png';

function Diagnosis() {
  

  return (
    <>
      <SectionDiagnosis>
       <div className='eduzinho-img'>
        <Img src={ImgLamp} />
        <li>Alunos Ativos</li>
        <li>Ticket Médio</li>
        <li>% Ocupação</li>
        <li>Média de Descontos</li>
        <li>Inadimplência</li>
        <li>Score Financeiro</li>
        <li>Score Didático</li>
        <li>Score Frequência</li>
       </div>
       <div className='diagnosis-list'>
        <div className='diagnosis-content'>
            <img src={DiagnosisImg}></img>
        </div>
       </div>
      </SectionDiagnosis>
    </>
  );
}

export default Diagnosis;
