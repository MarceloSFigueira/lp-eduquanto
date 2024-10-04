import styled from "styled-components";

export const Header = styled.header`
height:80px;
width: 100%;
background: linear-gradient(90deg, rgb(224, 74, 76) 7.72%, rgb(9, 167, 93) 28.04%, rgb(150, 194, 39) 46.09%, rgb(246, 190, 51) 62.35%, rgb(111, 80, 150) 79.95%, rgb(165, 110, 165) 94.4%);
background-size: 300% 300%;
animation: gradientAnimation 10s ease infinite;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
position: fixed;
top: 0;
left: 0;
z-index: 9999999999999999999999999999999999999999;

  @keyframes gradientAnimation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }


@media (min-width: 768px){

svg{
display:none;
}
}
`;

export const Img = styled.img`
height: 80px;
width: auto;
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
top: 64px;
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