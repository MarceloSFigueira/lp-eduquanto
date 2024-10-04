import styled from "styled-components";

export const SectionDiagnosis = styled.section`
height: max-content;
width: 100%;
background: #fff;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px){
flex-direction: column;
padding-top: 30px;
padding-bottom: 30px;
}

.eduzinho-img{
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100%;
width: 30%;
background-color: #6F5096;
padding-left: 10px;
padding-right: 10px;
padding-top: 50px;
padding-bottom: 50px;
}

.eduzinho-img li{
list-style: none;
color: #fff;
margin-top: 10px;
margin-bottom: 10px;
font-weight: 800;
}

.dinamic-list{
height: 100%;
width: 100%;
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: row;
gap: 30px
}

.dinamic-content{
display: flex;
flex-direction: column;
gap: 50px;
}

.diagnosis-content img {
  max-width: 80%;  /* A imagem não excederá a largura da sua seção pai */
  height: auto;     /* Mantém a proporção da imagem */
  display: block;   /* Remove o espaço abaixo da imagem */
  object-fit: contain; /* Garante que a imagem fique contida na área disponível */
}

@media (max-width: 768px){
.eduzinho-img{
width: 100%;
padding: 10px;
text-align: center;
padding-left: 0px;
padding-right: 0px;

}

.diagnosis-list{
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 30px;
padding-top: 50px;
}

.diagnosis-content{
display: flex;
flex-direction: column;
gap: 50px;
align-items: center;

}
}
`;

export const Img = styled.img`
height: auto;
width: 150px;

`;

