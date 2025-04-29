import styled from "styled-components";
import Background from "../../assets/background.png";

export const Section = styled.section`
height: max-content;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: start;
padding: 50px 30px;
background: url(${Background});
background-size: cover;
background-position: center;
gap: 20px;

@media (max-width: 768px){
flex-direction: column;
}
`;

export const Box = styled.div`
height: max-content;
width: 100%;

h2{
color: #fff;
}

p{
color: #fff;
}
`;

export const FormContainer = styled.div`
flex: 1;
background: #fff;
padding: 60px 40px;
display: flex;
flex-direction: column;
justify-content: center;
border-radius: 30px;
`;

export const Title = styled.h2`
color: #000 !important;
font-size: 1.2rem;
margin-bottom: 20px;
`;

export const Form = styled.form`
display: flex;
  flex-direction: column;

  label {
    margin: 10px 0 5px;
    font-weight: bold;
    font-size: 0.9rem;
  }

  input, select {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }

  button {
    padding: 12px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s;

    &:hover {
      background-color: #003d99;
    }
  }

  p {
    margin-top: 10px;
    font-size: 0.75rem;
    color: #000;
  }
`;