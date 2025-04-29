import { SectionContact, Img } from './style.js';
import ImgEdu from '../../assets/eduzinhocontact.svg';

function Contact() {
  return (
    <>

    <SectionContact id='contact'>
        <div className='eduzinho-img'>
            <Img src={ImgEdu} />
        </div>
        <div className='contact-list'>
            <div>
                <h2>CONTATOS</h2>
                <h3>Email:</h3>
                <p>luiz@eduquanto.com.br</p>
                <h3>Telefone:</h3>
                <p>(85) 9 9112-3270</p>
            </div>
        </div>

    </SectionContact>
    </>
  );
}

export default Contact;
