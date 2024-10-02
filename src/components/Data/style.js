import styled from "styled-components";

export const SectionData = styled.section`
height: max-content;
width: 100%;
background: #6F5096;
display: flex;
justify-content: center;
align-items: center;
padding-top: 100px;

@media (max-width: 768px){
flex-direction: column;
padding-top: 30px;
padding-bottom: 30px;
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
align-items: flex-start;
justify-content: center;
flex-direction: column;
gap: 30px
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

.content-circle{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 20px;
padding: 10px;
}

.circle-description{
font-size: 1.5em;
font-weight: 800;
color: #fff;
}

@media (max-width: 768px){
.data-list{
align-items: center;

}
.content-circle{
flex-direction: column;
}
.circle-description{
text-align: center;
}
}
`;

export const Img = styled.img`
height: 600px;
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