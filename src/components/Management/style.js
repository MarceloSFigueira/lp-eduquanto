import styled from "styled-components";

export const SectionManagement = styled.section`
height: 90vh;
width: 100%;
background: #000;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px){
height: 80vh;

}
`;

export const Gif = styled.img`
max-width: 100%;
height: auto;
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