import styled from "styled-components";
import { AppBar, Button, Container, Toolbar } from "@material-ui/core";

export const HeaderAppBar = styled(AppBar)`
  && {
    background-color: #ffde59;
    color: black;
    cursor: pointer;
  }
`;
export const HeaderToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;
export const BotãoLogin = styled(Button)`
  && {
    width: 150px;
  }
`;
