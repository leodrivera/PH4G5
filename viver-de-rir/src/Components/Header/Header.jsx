import { Container, Divider, Menu, MenuItem } from "@material-ui/core";
import React from "react";
import {
  BotaoMenu,
  HeaderAppBar,
  HeaderToolBar,
  IconsRedes,
  Link,
  LogoHeader,
} from "./Header.style";
import Logo from "../../assets/logo viver de rir.png";
import FacebookIcon from "../../assets/facebook.svg";
import InstaIcon from "../../assets/instagram.svg";
import YoutubeIcon from "../../assets/youtube.svg";

export default function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderAppBar position={"sticky"}>
      <HeaderToolBar component={Container}>
        <LogoHeader src={Logo} />
        <BotaoMenu
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Menu
        </BotaoMenu>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link href="https://linktr.ee/bcc1995">
            {" "}
            <MenuItem onClick={handleClose}>Linktree</MenuItem>
          </Link>
          <Divider />

          <MenuItem onClick={() => props.abrirPopUp(!props.PopUpAjude)}>
            Nos Ajude
          </MenuItem>
          <Divider />
          <Link href="https://www.atados.com.br/ong/viver-de-rir">
            {" "}
            <MenuItem onClick={handleClose}>Seja Voluntário</MenuItem>
          </Link>
          <Divider />
          <MenuItem onClick={handleClose}>
            <a href="https://www.facebook.com/ongviverderir/?ref=page_internal&_rdc=1&_rdr">
              {" "}
              <IconsRedes src={FacebookIcon} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/ongviverderir/">
              {" "}
              <IconsRedes src={InstaIcon} alt="intagram" />
            </a>
            <a href="https://www.youtube.com/channel/UCxBodS-aRSXX4K341nd7M8Q">
              {" "}
              <IconsRedes src={YoutubeIcon} alt="youtube" />
            </a>
          </MenuItem>
        </Menu>
      </HeaderToolBar>
    </HeaderAppBar>
  );
}
