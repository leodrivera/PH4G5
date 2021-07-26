import { Accordion, AppBar, Toolbar, Typography } from "@material-ui/core";
import styled from "styled-components";

export const ContainerFooter = styled(AppBar)`
  && {
    border: blue solid 2px;
    margin-top: 15%;
    background-color: #fdcdcdc3;
    padding-bottom: 40px;
    /* max-height: 40vh; */
  }
`;
export const ContainerMakeStyle = styled.div`
  border: solid black 2px;
  width: 30vw;
  display: flex;
  flex-direction: column;
`;
export const LogoFooter = styled.img`
  width: 8vw;
  /* border: 2px solid blue; */
  margin-top: 250px;
  margin-left: 300px;
`;
export const TittleFooter = styled.h3`
  /* border: red solid 2px; */
  color: #063d53;
  margin-top: 50px;
  width: 10vw;
  :hover {
    color: #063d538d;
  }
`;

export const AccordionFooter = styled(Accordion)`
  && {
    width: 20vw;
    background-color: #ffffff1f;
    border-radius: 8px;
    font-family: "Poppins", sans-serif;
    margin: 0;
    .primeiroAccordion {
      margin-top: 50px;
    }
  }
  /* border: 4px green solid; */
`;
export const TitleOndeTrabalham = styled(Typography)`
  && {
    font-weight: bold;
    color: #063d53;
  }
`;
export const ContainerToolbar = styled(Toolbar)`
  && {
    border: purple solid 2px;
    display: flex;
  }
`;
export const ContainerContatosRedes = styled.div`
  border: green 2px solid;
  display: flex;
  margin: 20px 200px 117px 130px;
`;

export const ContainerContatos = styled.div`
  border: 2px black solid;
  margin-right: 70px;
  width: 10vw;
`;
export const ContainerRedes = styled.div`
  border: 2px black solid;
  width: 20vw;
`;
export const ContainerIconsRedes = styled.div`
  border: red solid 2px;
  margin-top: 50px;
`;

export const IconsRedes = styled.img`
  margin-left: 20px;
  :hover {
    background-color: #ffff0082;
  }
`;
//----------------------------------------------------
// export const ContainerAccordion = styled.div`
//   border: 2px solid blue;
//   display: flex;
//   width: 40vw;
//   height: 4vw;
// `;
