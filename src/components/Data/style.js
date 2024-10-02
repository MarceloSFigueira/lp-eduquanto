import styled from "styled-components";

export const SectionData = styled.section`
height: 100vh;
width: 100%;
background: #6F5096;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px){
height: 90vh;
}

.eduzinho-img{
display: flex;
align-items: flex-end;
height: 100%;
width: 100%;
}

.data-list{
height: 100%;
width: 100%;
display: flex;
flex-direction: row;
gap: 30px;
}

.circle{
border-radius: 50%;
background-color: #96C227;
display: flex;
justify-content: center;
align-items: center;
width: 120px;
height: auto;
}

.circle img{
height: 80px;
width: auto;
padding: 18px;
}
`;

export const Img = styled.img`
height: 500px;
width: 100%;

`;



export const VideoContainer = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const StyledVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Faz com que o vídeo preencha toda a área */
  transform: translate(-50%, -50%);
`;