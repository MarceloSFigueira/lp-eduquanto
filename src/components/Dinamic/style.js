import styled from "styled-components";

export const SectionDinamic = styled.section`
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
align-items: flex-end;
justify-content: flex-end;
flex-direction: column;
height: 100%;
width: 30%;
background-color: #F6BE33;
padding-left: 30px;
padding-right: 30px;
}

.eduzinho-img h2{
font-size: 2.5em;
color: #6F5096;
font-weight: 500;
}

.eduzinho-img strong{
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

.dinamic-box{
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
gap: 20px;
width: 85%;
}

.dinamic-box p{
font-size: 1em;
}

.dinamic-box img{
height: 80px;
width: auto;
}


@media (max-width: 768px){
.eduzinho-img{
width: 100%;
padding: 10px;
text-align: center;
padding-left: 0px;
padding-right: 0px;

}

.eduzinho-img h2{
font-size: 2.5em;
color: #6F5096;
font-weight: 500;
padding: 10px;
}

.dinamic-list{
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 30px;
padding-top: 50px;
}

.dinamic-content{
display: flex;
flex-direction: column;
gap: 50px;
align-items: center;

}
}
`;

export const Img = styled.img`
height: 240px;
width: 100%;

`;

