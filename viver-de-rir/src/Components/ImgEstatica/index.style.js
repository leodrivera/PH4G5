import styled from "styled-components";

export const ContainerPrimeiraFoto = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  background-color: #ffeda4;
  padding: 30px 0px 30px 30px;
`;
export const PrimeiraImagem = styled.img`
  width: 85vw;
  height: 65vh;

  margin: 0 auto;
  border-radius: 10px;
`;

export const FraseFoto = styled.h1`
  position: absolute;
  background-color: #00000065;
  width: 50vw;
  left: 25%;
  right: 5%;
  top: 350px;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  font-family: "Secular One", sans-serif;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  letter-spacing: 5px;
`;

// export const TextImg = styled.h1`
//   position: absolute;
//   letter-spacing: 4px;
//   font-size: 80px;
//   color: #ffcd59;
//   left: 5%;
//   right: 5%;
//   bottom: 20px;
//   z-index: 10;
//   padding-top: 20px;
//   padding-bottom: 20px;
//   font-family: "Secular One", sans-serif;
//   text-align: center;
//   font-weight: 700;
//   text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
// `;
