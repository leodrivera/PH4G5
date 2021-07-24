import React from "react";
import Imagem1 from "../imagens/imagem1.jpg";
import Imagem2 from "../imagens/imagem2.jpg";
import Imagem3 from "../imagens/imagem3.jpg";
import Imagem4 from "../imagens/imagem4.jpg";
import Imagem5 from "../imagens/imagem5.jpg";
import Imagem6 from "../imagens/imagem6.jpg";
import { Imagens, TextInicial, Imagens1, Imagens2, Imagens3, Imagens4, Imagens5, Imagens6, Base1, Base2, Base3, Base4, Base5, Base6 } from "./cards.style";

export default function Cards() {
    return (
        <div>
            <TextInicial className="Texto">Nossas Ações</TextInicial>
            <Imagens className="imagens">
                <Base1>
                    <Imagens1 src={Imagem1} className="img1" />
                </Base1>
                <Base2>
                    <Imagens2 src={Imagem2} className="img2" />
                </Base2>
                <Base3>
                    <Imagens3 src={Imagem3} className="img3" />
                </Base3>
                <Base4>
                    <Imagens4 src={Imagem4} className="img4" />
                </Base4>
                <Base5>
                    <Imagens5 src={Imagem5} className="img5" />
                </Base5>
                <Base6>
                    <Imagens6 src={Imagem6} className="img6" />
                </Base6>

            </Imagens>
        </div>
    );

}