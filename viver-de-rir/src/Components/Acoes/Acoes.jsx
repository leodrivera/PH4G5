import React from "react";
import { Carousel } from "3d-react-carousal";
import ImgCarrossel1 from "../../assets/Hospital 1.jpg";
import ImgCarrossel2 from "../../assets/Hospital 2.jpg";
import ImgCarrossel3 from "../../assets/Natal campanha2.jpg";
import ImgCarrossel4 from "../../assets/Viaduto 1.jpg";
import {
  ContainerCarrossel,
  ContainerConheca,
  ContainerTittleVoluntario,
  ImgCarrossel,
  TittleVoluntario,
} from "./Acoes.style";

function Acoes() {
  let slides = [
    <ImgCarrossel src={ImgCarrossel1} />,
    <ImgCarrossel src={ImgCarrossel2} />,
    <ImgCarrossel src={ImgCarrossel3} />,
    <ImgCarrossel src={ImgCarrossel4} />,
  ];
  return (
    <ContainerConheca>
      <ContainerTittleVoluntario>
        <TittleVoluntario>Como levamos amor </TittleVoluntario>
      </ContainerTittleVoluntario>
      <ContainerCarrossel>
        <Carousel slides={slides} autoplay={false} interval={1000} />
      </ContainerCarrossel>
    </ContainerConheca>
  );
}
export default Acoes;
