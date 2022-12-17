import styled from "styled-components";
import { backgroundColor, ligthBlue } from "../constants/colors";
import Footer from "./Footer";
import Header from "./Header";
import NewHabit from "./NewHabit";

export default function Main() {

  return (
    <>
      <Header />
      <ContainerBody>
        <HabitsTitle>
          <h3>Meus Hábitos</h3>
          <div>+</div>
        </HabitsTitle>

        <NewHabit />
        
        

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
  min-height: 527px;
  margin: 70px auto;
  padding: 20px;
  padding-bottom: 40px;
  background-color: ${backgroundColor};
  p {
    margin-top: 20px;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;

const HabitsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: ${ligthBlue};
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




