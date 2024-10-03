import { SectionHelp, Img, StyledVideo } from './style.js';
import { useState, useEffect, useRef } from 'react';
import help1 from '../../assets/help2_1.png';
import help2 from '../../assets/help2_2.png';
import help3 from '../../assets/help2_3.png';
import EduzinhoHelp from '../../assets/eduzinhohelp.svg';

function Help2() {
  

  return (
    <>
      <SectionHelp>
        <div className='title-help'>
            <div className='title-box-help'>
                <h2>Como o <strong>EduQuanto pode ajudar sua escola</strong></h2>
            </div>
            <div className='title-box-help'>
                <img src={EduzinhoHelp}></img>
            </div>
        </div>
        <div className='help-container'>
            <div className='help-box-1'>
                <div className='help-box1'>
                    <img src={help1} className='help-img'></img>
                </div>
                <h3>Gestão de Matrículas</h3>
                <p>Ferramenta de CRM para aprimorar o processo de <strong>vendas da sua instituição de ensino e facilitar a comunicação com alunos e potenciais alunos</strong></p>
            </div>
            <div className='help-box-2'>
                <div className='help-box2'>
                    <img src={help2} className='help-img'></img>
                </div>
                <h3>Índice de Valor</h3>
                <p>Indicador criado pela EduQuanto que cruza a informação de precificação da tabela de <strong>mensalidade x IPCA x saída x entrada de alunos.</strong> </p>
                <p><strong>Esse indicador nos mostra se a precificação histórica pode estar afetando na perda de alunos ou no aumento de alunos nos últimos anos </strong></p>
            </div>
            <div className='help-box-3'>
                <div className='help-box3'>
                    <img src={help3} className='help-img'></img>
                </div>
                <h3>Visões Preditivas</h3>
                <p><strong>Cruzamento de scores </strong>(nota, frequência e financeiro) pode nos alertar para problemas futuros com alunos.</p>
            </div>
        </div>
      </SectionHelp>
    </>
  );
}

export default Help2;
