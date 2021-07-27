import React from "react";
import { Fab, IconeVoluntario } from "./BotaoFixo.style";
import "./index.css";
import Doe from "../../assets/icons8-doar-162.png";
import Heart from "../../assets/heart.svg";
import Voluntario from "../../assets/icons8-voluntariado-24.png";

export default function BotaoFixo(props) {
  return (
    <div>
      <Fab className="fab">
        <button className="main">
          <IconeVoluntario src={Voluntario} />
        </button>
        <ul>
          <li className="opcao1">
            <label for="opcao1">Seja voluntário</label>
            <a href="https://www.atados.com.br/ong/viver-de-rir">
              {" "}
              <button className="btn1" id="opcao1">
                <img src={Heart} alt="comunidade" />
              </button>
            </a>
          </li>
          <li>
            <label for="opcao2">Doe como puder</label>
            <button id="opcao2">
              <img
                src={Doe}
                alt="doe"
                onClick={() => props.abrirPopUp(!props.PopUpAjude)}
              />
            </button>
          </li>
        </ul>
      </Fab>
    </div>
  );
}
