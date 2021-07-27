import styled from "styled-components";
import { AppBar, Button, Toolbar } from "@material-ui/core";

export const HeaderAppBar = styled(AppBar)`
  && {
    background-color: #ffffffc3;
    color: black;
    cursor: pointer;
    height: 12vh;
  }
`;
export const HeaderToolBar = styled(Toolbar)`
  justify-content: space-between;
`;
export const LogoHeader = styled.img`
  width: 8vw;
`;

export const BotaoMenu = styled(Button)`
  font-weight: bold;
`;

export const IconsRedes = styled.img`
  margin-left: 5px;
  :hover {
    background-color: #ffff0082;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
`;
