import { Button } from "@material-ui/core";
// import { style } from "@material-ui/system";
import styled from "styled-components";

export const Btn = styled(Button)`
  height: 40vh;
  width: 50vw;
  background-color: #c51a1aca;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 32px;
  border-radius: 10px;
`;

export const ContainerBtn = styled.div`
  margin-top: 15%;
  display: flex;
  justify-content: center;
`;
