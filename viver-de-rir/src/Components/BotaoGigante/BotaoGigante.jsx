import { Container } from "@material-ui/core";
import React from "react";
import { ContainerBtn } from "./BotaoGigante.style";
import kombi from "../../assets/kombi.png";

export default function BotaoGigante() {
  return (
    <Container>
      <ContainerBtn>
        <img src={kombi} alt="" />
      </ContainerBtn>
    </Container>
  );
}
