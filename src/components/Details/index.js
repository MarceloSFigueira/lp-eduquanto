import { SectionDetails, Img, StyledVideo } from './style.js';
import Details1 from '../../assets/details1.png';
import Details2 from '../../assets/details2.png';
import Details3 from '../../assets/details3.png';
import Details4 from '../../assets/details4.png';
import Details5 from '../../assets/details5.png';
import Details6 from '../../assets/details6.png';
import EduzinhoDetais from '../../assets/eduzinhodetails.png';


function Details() {
  return (
    <>
      <SectionDetails>
        <div className='eduzinho-img'>
          <h2>Detalhes <strong> que fazem toda a diferença</strong></h2>
        </div>
        <div className='details-content'>
          <img src={EduzinhoDetais} className='eduzinho-details' />
          <div className='details-box'>
            <img src={Details1} alt="Detalhe 1" />
            <div className='details-content-box'>
              <h3>Foco no Desempenho Pedagógico:</h3>
              <p>Além da gestão administrativa, a EduQuanto também acentua a melhoria contínua do processo pedagógico, levando você e seus alunos à excelência acadêmica.</p>
            </div>
          </div>
          <div className='details-box'>
            <img src={Details4} alt="Detalhe 2" />
            <div className='details-content-box'>
              <h3>Score de Desempenho:</h3>
              <p>A EduQuanto oferece um sistema de pontuação de 0 a 10 para avaliar o desempenho de alunos e professores, proporcionando uma visão clara e quantificável da performance educacional</p>
            </div>
          </div>
          <div className='details-box'>
            <img src={Details2} alt="Detalhe 3" />
            <div className='details-content-box'>
              <h3>Unificação de Dados:</h3>
              <p>Todas as informações acadêmicas, financeiras e administrativas centralizadas em uma única plataforma.</p>
            </div>
          </div>
          <div className='details-box'>
            <img src={Details5} alt="Detalhe 4" />
            <div className='details-content-box'>
              <h3>Redução de Inadimplência:</h3>
              <p>Ferramentas específicas para a gestão de inadimplências, ajudando a identificar e resolver problemas financeiros de maneira eficiente</p>
            </div>
          </div>
          <div className='details-box'>
            <img src={Details3} alt="Detalhe 5" />
            <div className='details-content-box'>
              <h3>Visão Holística:</h3>
              <p>Tenha visão completa e detalhada de sua instituição, desde o desempenho acadêmico até a saúde financeira</p>
            </div>
          </div>
          <div className='details-box'>
            <img src={Details6} alt="Detalhe 6" />
            <div className='details-content-box'>
              <h3>Consultoria e Suporte:</h3>
              <p>Conte com a nossa equipe para um acompanhamento e monitoramento completo durante e depois da implementação</p>
            </div>
          </div>
        </div>
      </SectionDetails>
    </>
  );
}

export default Details;
