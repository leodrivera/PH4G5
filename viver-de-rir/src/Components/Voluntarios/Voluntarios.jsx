import React from "react";
import {
  ContainerImg,
  ContainerImgFrase,
  ContainerTitleVoluntarios,
  FraseVoluntario,
  ImagensVoluntarios,
  NomeVoluntario,
  TitleVoluntarios,
} from "./Voluntarios.style";
import Voluntaria1 from "../../assets/voluntaria1.jpg";
import Voluntario2 from "../../assets/voluntario2.jpg";
import Voluntaria3 from "../../assets/voluntaria3.jpg";
import Voluntaria5 from "../../assets/voluntaria5.jpg";

export default function Voluntarios() {
  return (
    <div>
      <ContainerTitleVoluntarios>
        <TitleVoluntarios>Conheça alguns da nossa trupe</TitleVoluntarios>
      </ContainerTitleVoluntarios>
      <ContainerImg>
        <ContainerImgFrase>
          <ImagensVoluntarios src={Voluntaria1} alt="voluntarios" />
          <NomeVoluntario>Brendha</NomeVoluntario>
          <FraseVoluntario>
            Aqui eu falo um pouco do meu personagem
          </FraseVoluntario>
        </ContainerImgFrase>
        <ContainerImgFrase>
          <ImagensVoluntarios src={Voluntario2} alt="voluntarios" />
          <NomeVoluntario>Tiago</NomeVoluntario>
          <FraseVoluntario>
            Aqui eu falo um pouco do meu personagem
          </FraseVoluntario>
        </ContainerImgFrase>
        <ContainerImgFrase>
          <ImagensVoluntarios src={Voluntaria3} alt="voluntarios" />
          <NomeVoluntario>Fernanda</NomeVoluntario>
          <FraseVoluntario>
            Aqui eu falo um pouco do meu personagem
          </FraseVoluntario>
        </ContainerImgFrase>
        <ContainerImgFrase>
          <ImagensVoluntarios src={Voluntaria5} alt="voluntarios" />
          <NomeVoluntario>Bianca</NomeVoluntario>
          <FraseVoluntario>
            Aqui eu falo um pouco do meu personagem
          </FraseVoluntario>
        </ContainerImgFrase>
      </ContainerImg>
    </div>
  );
}
