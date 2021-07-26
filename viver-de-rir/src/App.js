import React, { useState } from "react";
import BotaoFixo from "./Components/BotaoFixo/BotaoFixo";
import Header from "./Components/Header/Header";
import ImgEstatica from "./Components/ImgEstatica/index";
import SobreNos from "./Components/SobreNos/SobreNos";
import Footer from "./Components/Footer/Footer";
import Acoes from "./Components/Acoes/Acoes";
import Voluntarios from "./Components/Voluntarios/Voluntarios";
import Depoimentos from "./Components/Depoimentos/Depoimentos";
import BotaoGigante from "./Components/BotaoGigante/BotaoGigante";
import Contagem from "./Components/Contagem/Contagem";
import PopUp from "./Components/PopUp/PopUp";

function App() {
  const [PopUpAjude, setPopUpAjude] = useState(false);
  return (
    <div>
      <Header abrirPopUp={setPopUpAjude} PopUpAjude={PopUpAjude} />
      <ImgEstatica />
      <Acoes />
      <SobreNos />
      <Voluntarios />
      <Depoimentos />
      <BotaoGigante />
      <Contagem />
      {PopUpAjude ? (
        <PopUp abrirPopUp={setPopUpAjude} PopUpAjude={PopUpAjude} />
      ) : (
        ""
      )}
      <BotaoFixo />
      <Footer />
    </div>
  );
}

export default App;
