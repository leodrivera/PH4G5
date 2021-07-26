import styled from "styled-components";

export const TitleDepoimentos = styled.h1`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  font-family: "Poppind", sans-serif;
  color: #063d53;
`;

export const ContainerDepoimentos = styled.div`
  background-color: #ffde59;
  margin-top: 70px;
  margin-left: 80px;
  padding: 50px 0 50px 50px;
  width: 70vw;
  border-radius: 30px;
  box-shadow: 1em 1em 1em 1em #99989840;
  :hover {
    transition: 0.6s;
    transform: scale(1.02);
  }
`;
export const ImgDepoimentos = styled.img`
  border-radius: 50%;
`;
export const ImgDepoimentos2 = styled.img`
  width: 30vw;
  border-radius: 50%;
`;

export const ContainerDepoimento2 = styled.div`
  background-color: #ffde59;
  margin-top: 70px;
  margin-left: 220px;
  padding: 50px 0 50px 50px;
  width: 70vw;
  border-radius: 30px;
  box-shadow: 1em 1em 1em 1em #99989840;
  :hover {
    transition: 0.6s;
    transform: scale(1.02);
  }
`;
export const Depoimento = styled.h2`
  /* border: blue solid 2px; */
  width: 30vw;
  color: #c51a1aca;
  margin-left: 80px;
  margin-top: 50px;
  font-family: "Poppins", sans-serif;
`;
export const ImgComDepoimento = styled.div`
  /* border: red solid 2px; */
  display: flex;
`;

// export const ContainerTitleDepoimento = styled.div`
//   border: red solid 2px;
//   display: flex;
//   justify-content: center;
//   margin-top: 50px;
//   color: #063d53;
//   font-family: "Poppins", sans-serif;
// `;
// export const ContainerCarrossel = styled.div`
//   margin-top: 60px;
// `;
// export const ImgCarrossel = styled.img`
//   width: 20vw;
//   height: 20vw;
//   border-radius: 8px;
// `;
// export const ContainerNomeEDescricao = styled.div`
//   border: blue solid 2px;
//   /* position: relative;
//   top: 70px; */
//   width: 20vw;
//   background-color: #ffde59;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   font-family: "Poppins", sans-serif;
//   color: #c51a1a;
// `;
// export const ContainerDepoimentos = styled.div`
//   border: red 2px solid;
//   margin-left: 50px;
//   height: 70vh;
//   margin-top: 30px;
// `;
// export const FlipContainer = styled.div`
//   width: 80%;
//   justify-self: center;
// `;

// export const ContainerTitle = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   background-color: #2b3042;
//   width: 19vw;
//   margin-top: 20px;
//   padding-bottom: 38px;
//   padding-top: 25px;
//   height: 23vh;
//   border-radius: 10px;
// `;

// export const FrontFlipper = styled.div`
//   position: absolute;
//   backface-visibility: hidden;
// `;

// export const BackFlipper = styled.div`
//   display: flex;
//   align-items: flex-start;
//   justify-content: center;
//   flex-direction: column;
//   transform: rotateY(180deg);
//   backface-visibility: hidden;
//   color: #30344c;
//   p {
//     font-size: 20px;
//   }

//   div {
//     padding-top: 10px;
//   }
// `;

// export const ContainerImg = styled.div`
//   transform-style: preserve-3d;
//   transition: transform 0.8s;
//   position: relative;
//   cursor: pointer;

//   transform: ${(props) =>
//     props.flippedCardId === props.pokemonId ? "rotateY(180deg)" : "none"};
// `;
