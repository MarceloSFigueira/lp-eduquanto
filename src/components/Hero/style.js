import styled from "styled-components";

export const SectionEdu = styled.header`
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

export const BoxItens = styled.ul`
display: flex;
flex-direction: row;
gap: 20px;

a{
text-decoration: none;
}

li{
list-style: none;
color: #fff;
transition: .3s;
}

li:hover{
color: #6B50C5;
}

@media (max-width: 768px){
display: none;

li{
color: #000;
}
}

`;


export const BoxItensResponsive = styled.ul`
display: flex;
flex-direction: row;
gap: 20px;

a{
text-decoration: none;
}

li{
list-style: none;
}

position: absolute;
top: 80px;
right: 0;
background: #fff;
flex-direction: column;
width: 90%;
z-index: 99999999;
padding: 20px 20px 20px 20px;


li{
color: #000;
}
}

`;