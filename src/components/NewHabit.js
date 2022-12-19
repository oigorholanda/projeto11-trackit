import { useState } from "react";

import styled from "styled-components";
import { ligthBlue } from "../constants/colors";

export default function NewHabit({setplus}) {
    const [selected, setSelected] = useState(false)

    function selecDay() {
        setSelected(true)
        console.log(selected);
    }

  return (
    <NewHabitContainer>
        Novo Hábito
      <input type="text" placeholder="nome do habito" />
      <DivDias selected={selected}>
        <div onClick={() => selecDay()}>
          D
        </div>
        <div onClick={() => selecDay()}>
          S
        </div>
        <div onClick={() => selecDay()}>
          T
        </div>
        <div onClick={() => selecDay()}>
          Q
        </div>
        <div onClick={() => selecDay()}>
          Q
        </div>
        <div onClick={() => selecDay()}>
          S
        </div>
        <div onClick={() => selecDay()}>
          S
        </div>
      </DivDias>
      <DivButtons>
        <button className="cancelar" onClick={() => setplus(false)}>Cancelar</button>
        <button type="submit">Salvar </button>
        {/* Colocar o spinner de carregando no botão */}
      </DivButtons>
    </NewHabitContainer>
  );
}

const NewHabitContainer = styled.form`
  width: 89vw;
  height: 180px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const DivDias = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 0px;
  gap: 2px;
  div {
    width: 30px;
    height: 30px;
    color: ${props => props.selected ? "#ffffff" : "#DBDBDB"};
    background: ${props => props.selected ? "#CFCFCF" : "#ffffff"};
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const DivButtons = styled.div`
  width: 303px;
  height: 35px;
  display: flex;
  justify-content: end;
  gap: 10px;
  button {
    width: 85px;
    color: white;
    background-color: ${ligthBlue};
    border: none;
    border-radius: 4.63636px;
  }
  .cancelar {
    color: ${ligthBlue};
    background-color: white;
  }
`;
