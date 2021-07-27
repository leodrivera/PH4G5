import { Accordion, AppBar, Toolbar, Typography } from "@material-ui/core";
import styled from "styled-components";

export const ContainerFooter = styled(AppBar)`
  && {
    margin-top: 15%;
    background-color: #fdcdcdc3;
    padding-bottom: 40px;
  }
`;
export const ContainerMakeStyle = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;
export const LogoFooter = styled.img`
  width: 8vw;

  margin-top: 250px;
  margin-left: 300px;
`;
export const TittleFooter = styled.h3`
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
`;
export const TitleOndeTrabalham = styled(Typography)`
  && {
    font-weight: bold;
    color: #063d53;
  }
`;
export const ContainerToolbar = styled(Toolbar)`
  && {
    display: flex;
  }
`;
export const ContainerContatosRedes = styled.div`
  display: flex;
  margin: 20px 200px 117px 130px;
  width: 30vw;
`;

export const ContainerContatos = styled.div`
  margin-right: 120px;
  width: 10vw;
`;
export const ContatoEmail = styled.p`
  opacity: 0.9;
`;
export const ContainerRedes = styled.div`
  width: 20vw;
`;
export const ContainerIconsRedes = styled.div`
  margin-top: 50px;
`;

export const IconsRedes = styled.img`
  margin-left: 20px;
  :hover {
    background-color: #ffff0082;
  }
`;
