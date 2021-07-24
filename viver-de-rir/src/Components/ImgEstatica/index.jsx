import React from "react";
import { PrimeiraImagem, TextImg, Zoom } from "./index.style";
import ImagemEstatica from "../../assets/681.jpg";

export default function ImgEstatica() {
  return (
    <div>
      <Zoom className="zoom">
        <PrimeiraImagem src={ImagemEstatica} className="img" />
        <TextImg className="text-img">"Aqui vai alguma frase bonita"</TextImg>
      </Zoom>
    </div>
  );
}
