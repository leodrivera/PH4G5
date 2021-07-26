import React from "react";
import AbraçoImg from "../../assets/abraço.png";
import {
  BannerTittle,
  ContainerImagem,
  ContainerImgText,
  ContainerSobre,
  ContainerSobreNos,
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
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </TextSobreNos>
      </ContainerSobre>
    </ContainerImgText>
  );
}
