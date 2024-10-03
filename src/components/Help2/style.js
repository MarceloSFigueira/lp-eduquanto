import styled from "styled-components";

export const SectionHelp = styled.section`
height: max-content;
width: 100%;
background: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 100px;


@media (max-width: 768px){
flex-direction: column;
padding-top: 30px;
padding-bottom: 30px;
}

.title-help{
display: flex;
justify-content: center;
align-items: center;
width: 100%;
}

.title-help h2{
width: 80%;
font-weight: 500;
font-size: 3em;
color: #6F5096;
}

.title-help img{
height: 300px;
width: auto;
}

.title-box-help{
width: 100%;
display: flex;
justify-content: center;
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
align-items: stretch;;
width: 100%;
}

.help-container h3{
font-size: 1.5em;
color: #fff;
}

.help-container p{
font-size: 1em;
color: #fff;
}

.help-box-1{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 33.33%;
background-color: #09A75D;
padding-bottom: 50px;
padding-top: 50px;
padding-left: 10px;
padding-right: 10px;
}

.help-box-2{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 33.33%;
background-color: #E04A4C;
padding-bottom: 50px;
padding-top: 50px;
padding-left: 10px;
padding-right: 10px;
}

.help-box-3{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 33.33%;
background-color: #96C227;
padding-bottom: 50px;
padding-top: 50px;
padding-left: 10px;
padding-right: 10px;
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
height: auto;
width: 200px;
background-color: #09A75D;
display: flex;
justify-content: center;
align-items: center;
}


.help-box2{
height: auto;
width: 200px;
background-color: #E04A4C;
display: flex;
justify-content: center;
align-items: center;

}


.help-box3{
height: auto;
width: 200px;
display: flex;
justify-content: center;
align-items: center;
background-color: #96C227;
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


.help-box-1{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
background-color: #09A75D;
padding-bottom: 50px;
padding-top: 50px;
padding-left: 0px;
padding-right: 0px;
}

.help-box-2{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
background-color: #E04A4C;
padding-bottom: 50px;
padding-top: 50px;
padding-left: 0px;
padding-right: 0px;
}

.help-box-3{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
background-color: #96C227;
padding-bottom: 50px;
padding-top: 50px;
padding-left: 0px;
padding-right: 0px;
}

.title-help img{
display: none;
}

}
`;

export const Img = styled.img`
height: 600px;
width: 100%;

`;



