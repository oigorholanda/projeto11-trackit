import { Link } from "react-router-dom";
import styled from "styled-components";
import { ligthBlue } from "../constants/colors";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { useState } from "react";

export default function Footer() {
const [percentage, setpercentage] = useState(66)

  return (
    <ContainerFooter>
      <Link to="/habitos">Habitos</Link>
      <Circle to="/hoje">
        <CircularProgressbar         
        value={percentage}
        text="Hoje"
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: `${ligthBlue}`,
          textColor: "#fff",
          textSize: "20px",
          pathColor: "#fff",
          trailColor: "transparent",
          strokeLinecap: "round"
        })} />
      </Circle>
      <Link to="/historico">Histórico</Link>
    </ContainerFooter>
  );
}

const ContainerFooter = styled.div`
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  color: ${ligthBlue};
  font-size: 19px;
  z-index: 2;
`;

const Circle = styled(Link)`
  width: 91px;
  height: 91px;
  border-radius: 100px;
  color: white;
  /* background-color: ${ligthBlue}; */
  margin-bottom: 50px;

`;
