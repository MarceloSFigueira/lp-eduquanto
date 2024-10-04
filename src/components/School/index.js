import { SectionSchool, Img, StyledVideo } from './style.js';
import SchoolImg from '../../assets/school.png';

function School() {
  return (
    <>
      <SectionSchool>
        <div className='eduzinho-img'>
          <h2>Gestão escolar onde cada detalhe é visível e cada decisão é baseada em dados precisos</h2>
        </div>
        <div className='details-content'>
          <img src={SchoolImg} className='school-img' alt="School"/>
        </div>
        <div className='school-btn'>
            <h3>Faça a transição para uma escola operando em seu potencial máximo</h3>
            <a>EXPERIMENTE AGORA</a>
        </div>
      </SectionSchool>
    </>
  );
}

export default School;
