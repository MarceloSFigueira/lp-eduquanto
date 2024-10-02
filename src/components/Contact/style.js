import styled from "styled-components";

export const SectionContact = styled.section`
height: max-content;
width: 100%;
background: #fcbb2d;
display: flex;
justify-content: center;
align-items: center;
padding-top: 100px;

@media (max-width: 768px){
flex-direction: column;
padding-top: 30px;
padding-bottom: 30px;
gap: 40px;
}

.eduzinho-img{
display: flex;
align-items: flex-end;
height: 100%;
width: 100%;
}

.contact-list{
height: 100%;
width: 100%;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
flex-direction: column;
gap: 30px;
}

.contact-list h2{
font-size: 3em;
color: #6F5096;
margin: 0;
}

.contact-list h3{
font-size: 2em;
color: #fff;
margin: 0;
}

.contact-list p{
font-size: 2em;
color: #fff;
margin: 0;
}


@media (max-width: 768px){
.eduzinho-img{
height: 
}
.contact-list h2{
font-size: 2em;
color: #6F5096;
margin: 0;
}

.contact-list h3{
font-size: 1.5em;
color: #fff;
margin: 0;
}

.contact-list p{
font-size: 1.5em;
color: #fff;
margin: 0;
}
}
`;

export const Img = styled.img`
height: 400px;
width: 100%;


@media (max-width: 768px){
height: 260px;
}

`;
