import styled from "styled-components";

export const SectionRaiox = styled.section`
  height: 90vh;
  width: 100%;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 80vh;
  }

  @media (max-width: 480px) {
    height: 70vh;
  }
`;

export const VideoContainer = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 80vh;
    width: 100%;
  }

  @media (max-width: 480px) {
    height: 70vh;
    width: 100%;
  }
`;

export const StyledVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    width: auto;
    height: 100%;
  }

  @media (max-width: 480px) {
    width: auto;
    height: 100%;
  }
`;
