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
        <FraseFoto>
          "It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of"
        </FraseFoto>
      </div>
    </div>
  );
}
