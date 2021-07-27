import React from "react";
import AbraçoImg from "../../assets/abraço.png";
import {
  BannerTittle,
  ContainerImagem,
  ContainerImgText,
  ContainerSobre,
  ImgSobreNos,
  TextSobreNos,
  TittleSobreNos,
} from "./SobreNos.style";
import BannerSobreNos from "../../assets/banner-sobreNos.png";

export default function SobreNos() {
  return (
    <ContainerImgText>
      <ContainerImagem>
        <ImgSobreNos src={AbraçoImg} />
      </ContainerImagem>
      <ContainerSobre>
        <BannerTittle src={BannerSobreNos} />
        <TittleSobreNos>Sobre nós</TittleSobreNos>
        <TextSobreNos>
          A ONG surgiu através da necessidade de melhorar a qualidade de vida
          das pessoas. Na realização da dissertação de mestrado em saúde
          coletiva, Renata Tôndolo sentiu na pele os entraves para fazer a
          diferença no bem estar social e de qualidade de vida das pessoas,
          dentro das organizações de saúde. daí surgiu a necessidade de fazer
          algo para acolhimento , entregando alegria e amor para todas as
          pessoas em estado de fragilidade, e o caminho encontrado para isto foi
          foi através do palhaço.
        </TextSobreNos>
      </ContainerSobre>
    </ContainerImgText>
  );
}
