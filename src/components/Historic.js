import { useContext } from "react";
import styled from "styled-components";
import { backgroundColor, darkBlue, textColor } from "../constants/colors";
import AuthContext from "../contexts/AuthContext";
import Footer from "./Footer";
import Header from "./Header";

export default function Historic() {
  const {token, setToken, mamaco} = useContext(AuthContext)

  return (
    <>
      <Header/>
      <ContainerBody>
      <h1>Histórico</h1>
      <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      <p>{mamaco[0]}, {mamaco[1]}, {token}, {setToken("ola")}</p>
      </ContainerBody>
      
      <Footer/>
    </>
  );
}

const ContainerBody = styled.div`
  width: 100vw;
  min-height: 560px;
  margin: 70px auto;
  padding: 20px;
  
  background-color: ${backgroundColor};
  h1 {
    font-size: 23px;
    display: flex;
    align-items: flex-end;
    height: 33px;
    color: ${darkBlue};
    margin-bottom: 20px;
  }
  p {
    color: ${textColor};
  }
`;