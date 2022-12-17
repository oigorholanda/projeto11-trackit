import { Link } from "react-router-dom";
import styled from "styled-components";
import { ligthBlue } from "../constants/colors";

export default function Footer() {
  return (
    <ContainerFooter>
      <Link to="/habitos">Habitos</Link>
      <Circle to="/hoje">Hoje</Circle>
      <Link to="/historico">Historico</Link>
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
  font-size: 18px;
  z-index: 2;
`;

const Circle = styled(Link)`
  width: 91px;
  height: 91px;
  border-radius: 100px;
  color: white;
  background-color: ${ligthBlue};
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
