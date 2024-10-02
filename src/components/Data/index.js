import { SectionData, Img, StyledVideo } from './style.js';
import { useState, useEffect, useRef } from 'react';
import Video from '../../assets/management.mp4';
import ImgEdu from '../../assets/eduzinho.svg';
import Icon1 from '../../assets/icon1.svg';
import Icon2 from '../../assets/icon2.svg';
import Icon3 from '../../assets/icon3.svg';


function Data() {
  

  return (
    <>
      <SectionData>
       <div className='eduzinho-img'>
        <Img src={ImgEdu} />
       </div>
       <div className='data-list'>
            <div>
                <div className='circle'>
                    <img src={Icon1} />
                </div>
            </div>
            <div>
            <div className='circle'>
                <img src={Icon2} />
            </div>
                
            </div>
            <div>
            <div className='circle'>
                <img src={Icon3} />
            </div>
            </div>
       </div>
      </SectionData>
    </>
  );
}

export default Data;
