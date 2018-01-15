import styled from 'styled-components';

export const PinContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 300px;
  margin: 5px;
  background-color: blue;
`
export const PinImage = styled.img`
  height: 90%;
  width: 100%;
  object-fit: cover;
`
export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ccc;
  height: 10%;

`
export const ProfileCT = styled.div`
  width: 50%;
  display: flex;
  height: 100%;
  align-items: center;
  padding-left: 5px;
`
export const InfoCT = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5px;
  width: 50%;
  height: 100%;
`
export const LikeShare = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const DeleteBtn = styled.button`
  height: 30px;
  width: 30px;
`

export const  LikeShareBtn = styled.button`
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 50%;
  margin: 0px 5px 0px 5px;
  background-color: ${props => props.like ? "#2ecc71" : "#3498db"};
  color: white;

  &:hover{
    background-color: ${props => props.like ? "#27ae60" : "#2980b9"};
  }

  &:focus{
    border: none;
  }
`
export const ProfilePic = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0px 5px 0px 5px;
`
export const UserName = styled.a`
  color: black;
  font-family: Sans-Serif;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
