import { Typography } from "@material-ui/core";
import React from "react";
import {
  AccordionFooter,
  ContainerContatos,
  ContainerContatosRedes,
  ContainerFooter,
  ContainerIconsRedes,
  ContainerMakeStyle,
  ContainerRedes,
  ContainerToolbar,
  ContatoEmail,
  IconsRedes,
  LogoFooter,
  TitleOndeTrabalham,
  TittleFooter,
} from "./Footer.style";
import { makeStyles } from "@material-ui/core/styles";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Logo from "../../assets/logo viver de rir.png";
import FacebookIcon from "../../assets/facebook.svg";
import InstaIcon from "../../assets/instagram.svg";
import YoutubeIcon from "../../assets/youtube.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Footer() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <ContainerFooter position="static">
        <ContainerToolbar>
          <ContainerMakeStyle className={classes.root}>
            <TittleFooter>Onde atuamos?</TittleFooter>
            <AccordionFooter
              className="primeiroAccordion"
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <h3 className={classes.heading}>Hospitais</h3>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nossa Senhora da Conceição <br />
                  Criança Conceição <br /> Fêmina <br /> Cristo Redentor
                  <br />
                  Padre Jeremias -
                  <br />
                  Cachoeirinha Alvorada <br />
                  H. Psiquiátrico São Pedro Centenário <br /> São Leopoldo
                </Typography>
              </AccordionDetails>
            </AccordionFooter>
            <AccordionFooter
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <h3 className={classes.heading}>Casa de Repouso</h3>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  SPAAN <br /> Padre Cacique <br /> Lar São José
                </Typography>
              </AccordionDetails>
            </AccordionFooter>
            <AccordionFooter
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <h3 className={classes.heading}>Viadutos</h3>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Conceição <br /> Obirici <br /> Canoas
                </Typography>
              </AccordionDetails>
            </AccordionFooter>
          </ContainerMakeStyle>
          <LogoFooter src={Logo} alt="Logo" />
          <ContainerContatosRedes>
            <ContainerContatos>
              <TitleOndeTrabalham>
                Contatos:{" "}
                <ContatoEmail>comunicacao@viverderir.org.br</ContatoEmail>
                <ContatoEmail>Mensagem: (51) 99858-9418 </ContatoEmail>
              </TitleOndeTrabalham>
            </ContainerContatos>
            <ContainerRedes>
              <TitleOndeTrabalham>Nos acompanhe </TitleOndeTrabalham>
              <div>
                <ContainerIconsRedes>
                  <a href="https://web.facebook.com/ongviverderir/?ref=page_internal">
                    {" "}
                    <IconsRedes src={FacebookIcon} alt="facebook" />
                  </a>
                  <a href="https://www.instagram.com/ongviverderir/">
                    {" "}
                    <IconsRedes src={InstaIcon} alt="instagram" />
                  </a>
                  <a href="https://youtube.com/channel/UCxBodS-aRSXX4K341nd7M8Q">
                    <IconsRedes src={YoutubeIcon} alt="youtube" />
                  </a>
                </ContainerIconsRedes>
              </div>
            </ContainerRedes>
          </ContainerContatosRedes>
        </ContainerToolbar>
      </ContainerFooter>
    </div>
  );
}
