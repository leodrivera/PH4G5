import styled from "styled-components";

export const TitleVoluntarios = styled.h1`
  font-family: "Poppins", sans-serif;
  color: #063d53;
`;

export const ContainerTitleVoluntarios = styled.div`
  margin-top: 70px;
  margin-left: 30px;
  display: flex;
  justify-content: center;
`;
export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 70vw;
  margin: 20px 0 0 220px;
`;

export const ImagensVoluntarios = styled.img`
  width: 10vw;
  border-radius: 50%;
  margin-left: 90px;
  border: 2px gray solid;
  margin-top: 20px;
  :hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    transition: 0.6s;
  }
`;
export const ContainerImgFrase = styled.div`
  /* border: red solid 1px; */
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const NomeVoluntario = styled.h2`
  /* border: blue solid 2px; */
  display: flex;
  justify-content: center;
  color: #063d53;
`;

export const FraseVoluntario = styled.p`
  opacity: 0.5;
`;
