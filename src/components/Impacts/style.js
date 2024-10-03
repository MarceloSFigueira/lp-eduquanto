import styled from "styled-components";

export const SectionImpacts = styled.section`
height: max-content;
width: 100%;
background: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 50px;

@media (max-width: 768px){
flex-direction: column;
padding-top: 30px;
padding-bottom: 30px;
}

.title-impacts{
display: flex;
justify-content: flex-start;
align-items: start;
width: 100%;
}

.title-impacts h2{
width: 50%;
padding-left: 30px;
padding-right: 30px;
font-weight: 500;
font-size: 2em;
}

.impacts-content{

}

.impacts-content h2{
color: #6F5096;
font-size: 3em;
font-weight: 700;
}

.impacts-container{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
}

.impact-box{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 30%;
}

.impact-box p{
font-size: 1.2em;
margin: 0;
}

.impact-box h3{
font-size: 2em;
margin: 0;
}

.impacts-box1{
height: 130px;
width: 240px;
background-color: #F6BE33;
display: flex;
justify-content: center;
align-items: center;
}


.impacts-box2{
height: 130px;
width: 240px;
background-color: #6F5096;
display: flex;
justify-content: center;
align-items: center;
}


.impacts-box3{
height: 120px;
width: 240px;
background-color: #E04A4C;
display: flex;
justify-content: center;
align-items: center;

}

.impacts-img{
height: 100px;
width: auto;
}

@media (max-width: 768px){
.title-impacts h2{
width: 100%;
padding-left: 20px;
padding-right: 20px;
font-weight: 500;
font-size: 2em;
}

.impacts-content{
text-align: center;
}

.impacts-container{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
gap: 30px;
}

.impact-box{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 90%;
}

}
`;

export const Img = styled.img`
height: 600px;
width: 100%;

`;


