import { Button, Container } from "@material-ui/core";
import React from "react";
import {
  BotãoLogin,
  ContainerNav,
  FraseFoto,
  HeaderAppBar,
  HeaderToolBar,
  PrimeiraImagem,
  SessoesPage,
} from "./Header.style";
import ImagemEstatica from "../../assets/viver-de-rir-estatica.jpg";

export default function Header() {
  return (
    <div>
      <HeaderAppBar position={"fixed"}>
        <HeaderToolBar component={Container}>
          <ContainerNav>
            <SessoesPage>Início</SessoesPage>
            <SessoesPage>Sobre </SessoesPage>
            <SessoesPage> Blog</SessoesPage>
            <SessoesPage>Login</SessoesPage>
          </ContainerNav>
          <BotãoLogin variant="contained" color="secondary">
            Nos ajude
          </BotãoLogin>
        </HeaderToolBar>
      </HeaderAppBar>
      <PrimeiraImagem src={ImagemEstatica} />
      <div>
        <FraseFoto>
          "It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of"
        </FraseFoto>
      </div>
    </div>
  );
}
// navbar-collapse
// container-fluid

/*  */
