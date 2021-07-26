import React from "react";
import {
  ContainerDepoimentos,
  ContainerImg,
  ContainerNomeEDescricao,
  ContainerTitleDepoimento,
  Depoimento,
  ImgCarrossel,
  ImgComDepoimento,
  ImgDepoimentos,
  TitleDepoimentos,
} from "./Depoimentos.style";
import ImgCarrossel1 from "../../assets/239.jpg";
import ImgCarrossel2 from "../../assets/363.jpg";
import ImgCarrossel3 from "../../assets/402.jpg";
import ImgCarrossel4 from "../../assets/411.jpg";
import "./index.css";
import depoimentos1 from "../../assets/depoimentos1.png";
import depoimentos2 from "../../assets/voluntaria5.jpg";
import depoimentos3 from "../../assets/depoimentos3.png";
import { ImgDepoimentos2 } from "./Depoimentos.style";
import { ContainerDepoimento2 } from "./Depoimentos.style";

export default function Depoimentos() {
  return (
    <div>
      <div>
        <TitleDepoimentos>O que nos move?</TitleDepoimentos>
      </div>
      <ContainerDepoimentos>
        <ImgComDepoimento>
          <ImgDepoimentos src={depoimentos1} alt="depoimento" />
          <Depoimento>
            "Tanto amor pela viver de rir que me realizo sendo viver de rir!
            Amor, compaixão ao próximo , somos todos viver de rir." -{" "}
            <strong>Rui Kleber</strong>
          </Depoimento>
        </ImgComDepoimento>
      </ContainerDepoimentos>
      <ContainerDepoimento2>
        <ImgComDepoimento>
          <Depoimento>
            "Virei palhaço para fazer o bem e que bem me fazser palhaço!" -
            <strong> Maitê Medeiros</strong>
          </Depoimento>
          <ImgDepoimentos2 src={depoimentos2} alt="depoimento" />
        </ImgComDepoimento>
      </ContainerDepoimento2>
      <ContainerDepoimentos>
        <ImgComDepoimento>
          <div>
            <ImgDepoimentos src={depoimentos3} alt="depoimento" />
          </div>
          <div>
            <Depoimento>
              "Quando conheci o Projeto Viver de Rir, achei que poderia de
              alguma forma ajudar pessoas mudando por um momento a realidade em
              que elas se encontram. A cada dia me vejo mais otimista com sede
              de ver um mundo onde possamos cada vez mais estender as mãos para
              o nosso semelhante." - Thiago Kutti
            </Depoimento>
          </div>
        </ImgComDepoimento>
      </ContainerDepoimentos>
    </div>
  );
}

//  <ImgCarrossel src={ImgCarrossel1} />,
//         <ImgCarrossel src={ImgCarrossel2} />,
//         <ImgCarrossel src={ImgCarrossel3} />,
//         <ImgCarrossel src={ImgCarrossel4} />,

/* <ContainerTitleDepoimento>
        <h1>O que nos move?</h1>
      </ContainerTitleDepoimento>
      <ContainerDepoimentos>
        <div className="flip-container">
          <div className="flipper">
            <div class="front">
              <ImgCarrossel src={ImgCarrossel1} />
              <ContainerNomeEDescricao>
                <h2>Nome da pessoa</h2>
                <p>o que ela faz e quem ela é</p>
              </ContainerNomeEDescricao>
            </div>
            <div class="back">
              <h4>Aqui vai o depoimento</h4>
            </div>
          </div>
        </div>
      </ContainerDepoimentos> */
