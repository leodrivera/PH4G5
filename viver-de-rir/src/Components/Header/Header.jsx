import React from "react";
import { Button, Container } from "@material-ui/core";
import {
  BotãoLogin,
  //   ContainerBotão,
  HeaderAppBar,
  HeaderToolBar,
} from "./Header.style";

// const ColorButton = withStyles((theme) => ({
//   root: {
//     color: theme.palette.getContrastText("#c51a1a"[500]),
//     backgroundColor: "#c51a1a",
//     "&:hover": {
//       backgroundColor: "#c51a1a"[700],
//     },
//   },
// }))(Button);

export default function Header() {
  return (
    <div>
      <HeaderAppBar position={"sticky"}>
        <HeaderToolBar component={Container}>
          <Button variant="outlined" color="secondary">
            Início
          </Button>
          <Button variant="outlined" color="secondary">
            Sobre{" "}
          </Button>
          <Button variant="outlined" color="secondary">
            {" "}
            Blog
          </Button>
          <Button variant="outlined" color="secondary">
            Login
          </Button>

          <BotãoLogin variant="contained" color="secondary">
            Nos ajude
          </BotãoLogin>
        </HeaderToolBar>
      </HeaderAppBar>
    </div>
  );
}
