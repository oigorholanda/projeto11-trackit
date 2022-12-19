import styled from "styled-components";
import { textColor } from "../constants/colors";

export default function Habit() {
  return (
    <>
      <HabitContainer>
        <div>
          <h3>Ler 1 capítulo de livro</h3>
          <p>Sequência atual: 3 dias</p>
          <p>Seu recorde: 5 dias</p>
        </div>
        <section>✅</section>
      </HabitContainer>
    </>
  );
}

const HabitContainer = styled.div`
  width: 89vw;
  height: 95px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
  color: ${textColor};
  h3 {
    font-size: 20px;
    margin-bottom: 8px;
  }
  p {
font-size: 13px;
  }
  section {
    width: 69px;
    height: 69px;
    font-size: 59px;
  }
`;
