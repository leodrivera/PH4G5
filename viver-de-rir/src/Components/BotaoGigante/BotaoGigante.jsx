import { Container } from "@material-ui/core";
import React from "react";
import { Btn, ContainerBtn } from "./BotaoGigante.style";

export default function BotaoGigante() {
  return (
    <Container>
      <ContainerBtn>
        <Btn variant="contained" color="secondary">
          Nos ajude a continuar equilibrando os pratinhos!
        </Btn>
      </ContainerBtn>
    </Container>
  );
}
