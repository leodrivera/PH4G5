import React from "react";
import {
  PrimeiraImagem,
  FraseFoto,
  ContainerPrimeiraFoto,
} from "./index.style";
import ImagemEstatica from "../../assets/viver-de-rir-estatica2.jpg";

export default function ImgEstatica() {
  return (
    <div>
      <ContainerPrimeiraFoto>
        <PrimeiraImagem src={ImagemEstatica} />
      </ContainerPrimeiraFoto>

      <div>
        <FraseFoto>"SONHOS QUE SE TORNAM REALIDADE"</FraseFoto>
      </div>
    </div>
  );
}
