import styled from "styled-components";

export const SectionHelp = styled.section`
height: max-content;
width: 100%;
background: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 100px;
padding-top: 100px;


@media (max-width: 768px){
flex-direction: column;
padding-top: 30px;
padding-bottom: 30px;
}

.title-help{
display: flex;
justify-content: flex-start;
align-items: start;
width: 100%;
}

.title-help h2{
width: 50%;
padding-left: 30px;
padding-right: 30px;
font-weight: 500;
font-size: 2em;
}

.help-content{

}

.help-content h2{
color: #6F5096;
font-size: 3em;
font-weight: 700;
}

.help-container{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
}

.help-box{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 20%;
}

.help-box p{
font-size: 1.2em;
margin: 0;
}

.help-box h3{
font-size: 1.2em;
margin-top: 10px;
margin-bottom: 10px;

}

.help-box1{
height: 240px;
width: 200px;
background-color: #E04A4C;
display: flex;
justify-content: center;
align-items: center;
}


.help-box2{
height: 240px;
width: 200px;
background-color: #09A75D;
display: flex;
justify-content: center;
align-items: center;
}


.help-box3{
height: 240px;
width: 200px;
background-color: #6F5096;
display: flex;
justify-content: center;
align-items: center;

}

.help-box4{
height: 240px;
width: 200px;
background-color: #96C227;
display: flex;
justify-content: center;
align-items: center;

}

.help-img{
height: 100px;
width: auto;
}

@media (max-width: 768px){
.title-help h2{
width: 100%;
padding-left: 20px;
padding-right: 20px;
font-weight: 500;
font-size: 2em;
}

.help-content{
text-align: center;
}

.help-container{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
gap: 30px;
}

.help-box{
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



