import styled from "styled-components";
import { textColor } from "../constants/colors";
import { useState } from "react";

import {BsFillCheckSquareFill} from 'react-icons/bs'

export default function Habit() {
    const [checked, setcheked] = useState(false)

  return (
    <>
      <HabitContainer>
        <div>
          <h3>Ler 1 capítulo de livro</h3>
          <p>Sequência atual: 3 dias</p>
          <p>Seu recorde: 5 dias</p>
        </div>

        <BsFillCheckSquareFill color={checked? "#8FC549" : "#EBEBEB"} height="60px" width="60px" onClick={() => setcheked(!checked)} />
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
  input {
    width: 50px;
    height: 50px;
    font-size: 25px;
    background-color: green;
    &:hover {
      cursor: pointer;
      background-color: #ccc;
    }
  }
`;
