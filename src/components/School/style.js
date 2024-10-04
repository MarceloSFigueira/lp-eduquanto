import styled from "styled-components";

export const SectionSchool = styled.section`
  height: max-content;
  width: 100%;
  background: #6F5096;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-bottom: 50px;

  .eduzinho-img {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: #6F5096;
    padding: 50px 0;
  }

  .eduzinho-img h2 {
    color: #F6BE33;
    font-size: 2.5em;
    font-weight: 700;
    text-align: center;
    width: 60%;
  }

  .eduzinho-img strong {
    font-weight: 700;
    color: #F6BE33;
  }

  .details-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; 
  }

  .school-img {
    width: 100%; 
    max-width: 1200px; 
    height: auto; 
    object-fit: cover; 
  }

  .school-btn{
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 20px;
   padding-top: 50px;
  }

  .school-btn h3{
  color: #fff;
  font-size: 1.6em;
  }

  .school-btn a{
  color: #fff;
  padding: 20px;
  background-color: #09A75D;
  border-radius: 10px;
  font-weight: 800;
  cursor: pointer;
  transition: .3s;
  }

  .school-btn a:hover{
  transform: scale(1.1);
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
      width: 80%;
    }

    .school-btn{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 20px;
    padding-bottom: 20px;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  max-width: 300px;
  object-fit: contain;
`;
