import { SectionManagement, VideoContainer, StyledVideo } from './style.js';
import { useState, useEffect, useRef } from 'react';
import Video from '../../assets/management.mp4';

function Management() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;

          if (entry.isIntersecting) {
            if (!isPlaying && video) {
           
              video.play().then(() => {
                setIsPlaying(true); 
              }).catch((error) => {
                console.error('Erro ao tentar reproduzir o vídeo:', error);
              });
            }
          } else {
            if (isPlaying && video) {
             
              video.pause();
              setIsPlaying(false); 
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <>
      <SectionManagement>
        <VideoContainer ref={sectionRef}>
          <StyledVideo ref={videoRef} muted playsInline>
            <source src={Video} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </StyledVideo>
        </VideoContainer>
      </SectionManagement>
    </>
  );
}

export default Management;
