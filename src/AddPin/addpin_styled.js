import styled from 'styled-components';

export const MainContainer = styled.div`
  align-items: center;
  background-image: url(${require('../Assets/background.png')});
  background-repeat: repeat;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;

`
export const FormContainer = styled.div`
  align-items: center;
  background-color: #ccc;
  border: 2px solid #ddd;
  border-radius: 25px;
  display: flex;
  justify-content: flex-start;
  height: 70%;
  padding-left: 20px;
  width: 50%;

  @media (max-width: 600px) {
    justify-content: center;
  }
`
export const Title = styled.h1`
  color: #555;
  font-family: Sans-Serif;
  font-size: 220%;
`
export const Value = styled.h2`
  color: #555;
  font-size: 120%;
  font-family: Sans-Serif;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;

`
export const FormInput = styled.input`
  height: 25px;
  width: 70%;
`
export const FormButton = styled.button`
  color: white;
  height: 50px;
  width: 120px;
  border: none;
  background-color: #27ae60;
  box-shadow: 0px 3px 5px #555;
  transition: all ease 0.3s;
  &:hover{
    transform: translate(0px, 1px);
    box-shadow: 0px 2px 2px #555;
  }
  &:focus{
    outline: none;
    border: none;
  }
`
