import React from "react";
import { ImgPopUp } from "./PopUp.style";
import PopUpImg from "../../assets/PopUp.png";

export default function PopUp(props) {
  return (
    <div>
      <ImgPopUp
        src={PopUpImg}
        onClick={() => props.abrirPopUp(props.setPopUpAjude)}
        alt=""
      />
    </div>
  );
}
