import React from "react";
import { Fab, IconeVoluntario } from "./BotaoFixo.style";
import "./index.css";
// import Users from "../../assets/user.svg";
import Doe from "../../assets/icons8-doar-162.png";
import Heart from "../../assets/heart.svg";
import Voluntario from "../../assets/icons8-voluntariado-24.png";

export default function BotaoFixo() {
  return (
    <div>
      <Fab className="fab">
        <button className="main">
          <IconeVoluntario src={Voluntario} />
        </button>
        <ul>
          <li className="opcao1">
            <label for="opcao1">Seja voluntário</label>
            <button className="btn1" id="opcao1">
              <img src={Heart} alt="comunidade" />
            </button>
          </li>
          <li>
            <label for="opcao2">Doe como puder</label>
            <button id="opcao2">
              <img src={Doe} alt="doe" />
            </button>
          </li>
        </ul>
      </Fab>
    </div>
  );
}
