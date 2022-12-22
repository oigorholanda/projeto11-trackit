import { useContext } from "react";
import styled from "styled-components";
import { backgroundColor, darkBlue, textColor } from "../constants/colors";
import UserContext from "../contexts/UserContext";
import Footer from "./Footer";
import Header from "./Header";

export default function Historic() {
  const { user } = useContext(UserContext);
  let pName = "";

  if (user) {
    pName = user.name.split(" ");
  }

  return (
    <>
      <Header />
      <ContainerBody>
        <h3>Histórico</h3>
        <p>
          Em breve você poderá ver o histórico dos seus hábitos aqui
          {user.name ? `, ${pName[0]} =)` : " =)"}
        </p>
      </ContainerBody>

      <Footer />
    </>
  );
}

const ContainerBody = styled.div`
  width: 100vw;
  min-height: 560px;
  margin: 70px auto;
  padding: 20px;

  background-color: ${backgroundColor};
  h3 {
    font-size: 23px;
    display: flex;
    align-items: flex-end;
    height: 33px;
    color: ${darkBlue};
    margin-bottom: 20px;
  }
  p {
    margin: 30px 0px;
    font-size: 17.976px;
    line-height: 22px;
    color: ${textColor};
  }
`;
