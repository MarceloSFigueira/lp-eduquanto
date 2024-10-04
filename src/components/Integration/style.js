import styled from "styled-components";

export const SectionIntegration = styled.section`
  height: max-content;
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .line{
  background-color: #fff;
  height: 180px;
  width: 1px;
  margin-left: 10px;
  margin-right: 10px;
  }

  .engine{
  position: absolute;
  right: 0;
  bottom: 0;
  height: 200px;
  }

  .eduzinho-img {
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: #6F5096;
    padding-top: 50px;
    padding-bottom: 50px;
    position: relative;
  }

  .eduzinho-img h2 {
    list-style: none;
    color: #fff;
    font-size: 3em;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 800;
    padding-left: 50px;
  }

  .eduzinho-img h3 {
    list-style: none;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 600;
    width: 60%;
    padding-left: 50px;
  }

  .eduzinho-img h3 strong {
    list-style: none;
    color: #fcbb2d;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 800;
  }

  .integration-box-icon{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  }

  .integration-box-icon svg{
  font-size: 50px;
  color: #E04A4C;
  }

  .integration-list {
    height: 100%;
    width: 100%;
    display: flex;
    background-color: #96c227;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 30px;
    padding-bottom: 50px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .integration-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 50%; /* Limita a largura para manter responsividade */
    @media (max-width: 768px) {
      max-width: 90%; /* Ajuste para dispositivos móveis */
    }
  }

  .integration-box h3 {
    font-size: 2em;
    color: #fff;
    display: flex;
    justify-content: center;
  }

  .integration-box img {
    width: 100%;
    max-width: 600px; /* Limita a largura máxima da imagem */
    height: auto;
    object-fit: contain; /* Mantém a proporção da imagem */
  }

  @media (max-width: 768px) {
    .eduzinho-img {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: #6f5096;
    padding-top: 50px;
    padding-bottom: 50px;
  }


    .eduzinho-img h2 {
    color: #fff;
    font-size: 2em;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 800;
    text-align: center;
    padding-left: 0px;
  }

  .eduzinho-img h3 {
    color: #fff;
    font-size: 1em;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 800;
    text-align: center;
    padding-left: 0px;
  }



    .integration-list {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 30px;
      padding-top: 50px;
    }

    .integration-box {
      max-width: 90%;
    }

    .line{
    display: none;
    }

    .engine{
    display: none;
    }
  }
`;

export const Img = styled.img`
  height: auto;
  width: 100%;
  max-width: 300px; /* Limita a largura da imagem */
  object-fit: contain; /* Garante que a imagem mantenha a proporção sem ser cortada */
`;
