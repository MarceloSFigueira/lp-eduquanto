import styled from "styled-components";

export const SectionDetails = styled.section`
  height: max-content;
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .eduzinho-details{
  position: absolute;
  bottom: 0;
  right: -50px;
  }

  .eduzinho-img {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #6F5096;
    padding: 50px 0;
  }

  .eduzinho-img h2 {
    color: #fff;
    font-size: 3em;
    font-weight: 700;
    padding-left: 50px;
  }

  .eduzinho-img strong {
    font-weight: 700;
    color: #F6BE33;
  }

  .details-content {
    width: 100%;
    background-color: #96c227;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    padding: 50px 0;
    position: relative;
  }

  .details-box {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }

  .details-content-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
  }

  .details-content-box h3{
    margin: 0;
  }


  .details-box img {
    width: 100%;
    max-width: 100px;
    object-fit: contain;
  }

  h3, p {
    color: #fff;
  }

  @media (max-width: 768px) {
    .details-content {
      grid-template-columns: 1fr;
      justify-items: center;
      text-align: center;
    }

    .details-box {
      max-width: 90%;
      flex-direction: column;
    }

    .details-content-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80%;
    }

    .eduzinho-img h2 {
      font-size: 2em;
      text-align: center;
      padding-left: 0;
    }

    .eduzinho-details{
    display: none;
    }
  }

  
`;

export const Img = styled.img`
  width: 100%;
  max-width: 300px;
  object-fit: contain;
`;
