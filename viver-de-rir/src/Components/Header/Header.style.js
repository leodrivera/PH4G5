import styled from "styled-components";
import { AppBar, Button, Toolbar } from "@material-ui/core";

export const HeaderAppBar = styled(AppBar)`
  && {
    background-color: #ffe16aa0;
    color: black;
    cursor: pointer;
  }
`;
export const HeaderToolBar = styled(Toolbar)`
  justify-content: space-between;
`;
export const BotãoLogin = styled(Button)`
  && {
    width: 150px;
  }
`;
export const ContainerNav = styled.div`
  display: flex;
`;

export const SessoesPage = styled.h3`
  margin-right: 50px;
  :hover {
    color: #c51a1a;
    transition: 0.3s;
  }
`;

export const PrimeiraImagem = styled.img`
  width: 99vw;
  filter: blur(3px);
`;

export const FraseFoto = styled.h1`
  position: absolute;
  left: 5%;
  right: 5%;
  top: 300px;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #ffffff;
  text-align: center;
  font-family: "Secular One", sans-serif;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
`;
