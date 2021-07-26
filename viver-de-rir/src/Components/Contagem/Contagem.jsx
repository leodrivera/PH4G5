import { Container } from "@material-ui/core";
import React from "react";
import {
  ContainerContagem,
  ContainerDados,
  ContainerHorasDoadas,
  ContainerMedia,
  ContainerMediaPessoas,
  ContainerVoluntarios,
  ParagrafoDados,
  TitleContagem,
  TitleContagemDados,
} from "./Contagem.style";

export default function Contagem() {
  return (
    <ContainerContagem>
      <Container>
        <TitleContagem>Nossas ações ajudam a mudar o mundo</TitleContagem>

        <ContainerDados>
          <ContainerVoluntarios>
            <TitleContagemDados>100</TitleContagemDados>
            <ParagrafoDados>Voluntários</ParagrafoDados>
          </ContainerVoluntarios>
          <ContainerMedia>
            <TitleContagemDados>40</TitleContagemDados>
            <ParagrafoDados>
              Média de visitas <br /> por mês
            </ParagrafoDados>
          </ContainerMedia>
          <ContainerMediaPessoas>
            <TitleContagemDados>2.000</TitleContagemDados>
            <ParagrafoDados>
              Média de pessoas <br /> impactadas por mês
            </ParagrafoDados>
          </ContainerMediaPessoas>
          <ContainerHorasDoadas>
            <TitleContagemDados>640</TitleContagemDados>
            <ParagrafoDados>Horas doadas por mês</ParagrafoDados>
          </ContainerHorasDoadas>
        </ContainerDados>
      </Container>
    </ContainerContagem>
  );
}
