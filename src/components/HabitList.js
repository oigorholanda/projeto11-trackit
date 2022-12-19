import { useState } from "react";
import styled from "styled-components";
import { backgroundColor, darkBlue, ligthBlue } from "../constants/colors";
import Footer from "./Footer";
import Header from "./Header";
import NewHabit from "./NewHabit";

export default function Main() {
  const [plus, setplus] = useState(false)

  function CreateHabit(){
    setplus(true);
    console.log("Funcional");
  }

  return (
    <>
      <Header />
      <ContainerBody>
        <HabitsTitle>
          <h3>Meus Hábitos</h3>
          <div onClick={CreateHabit}>+</div>
        </HabitsTitle>

        {plus && <NewHabit setplus={setplus} />}
          {/* map do Myhabits */}
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
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
  p {
    margin: 30px 0px;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;

const HabitsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: ${darkBlue};
  font-size: 23px;
  margin-bottom: 20px;
  div {
    width: 40px;
    height: 33px;
    color: white;
    font-size: 27px;
    background-color: ${ligthBlue};
    text-align: center;
    border-radius: 4.63636px;
  }
`;
