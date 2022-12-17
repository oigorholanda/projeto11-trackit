import { useState } from "react";
import styled from "styled-components";
import { ligthBlue } from "../constants/colors";

export default function NewHabit() {
  const [isSelected, setisSelected] = useState(false)

  function selecionaDia() {
    setisSelected(true)
    console.log(isSelected);
  }

  return (
    <NewHabitContainer>
      <input type="text" placeholder="nome do habito" />
      <DivDias>
        <div selected={isSelected} onClick={selecionaDia}>
          D
        </div>
        <div selected={isSelected} onClick={selecionaDia}>
          S
        </div>
        <div selected={isSelected} onClick={selecionaDia}>
          T
        </div>
        <div selected={isSelected} onClick={selecionaDia}>
          Q
        </div>
        <div selected={isSelected} onClick={selecionaDia}>
          Q
        </div>
        <div selected={isSelected} onClick={selecionaDia}>
          S
        </div>
        <div selected={isSelected} onClick={selecionaDia}>
          S
        </div>
      </DivDias>
      <DivButtons>
        <button className="cancelar">Cancelar</button>
        <button>Salvar </button>
      </DivButtons>
    </NewHabitContainer>
  );
}

const NewHabitContainer = styled.div`
  width: 89vw;
  height: 180px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const DivDias = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: -15px;
  div {
    width: 30px;
    height: 30px;
    color: ${(props) => (props.selected ? "red" : "#dbdbdb")};
    background: ${(props) => (props.selected ? "#dbdbdb" : "#ffffff")};
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
