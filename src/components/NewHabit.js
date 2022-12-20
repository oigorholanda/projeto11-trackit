import { useState } from "react";
import styled from "styled-components";
import { ligthBlue } from "../constants/colors";

export default function NewHabit({plus, setPlus}) {
  const [days, setDays] = useState([]);

  function selecDay(day) {
    const novoarray = [...days, day]
    if (!days.includes(day)) {
      setDays(novoarray)
    }

    console.log(days);
  }

  function saveHabit() {
    //       const body = { ... };
    // const config = {
    // 	headers: {
    // 		"Authorization": "Bearer token_recebido"
    // 	}
    // }
    // axios.post("http://meusite.com/messages", body, config);
  }

  return (
    <NewHabitContainer onSubmit={saveHabit} visible={plus}>
      Novo Hábito
      <input type="text" placeholder="nome do habito" />
      <DivDias >
        <DayDiv selected={days.includes(1)? true: false} onClick={() => selecDay(1)}>D</DayDiv>
        <DayDiv selected={days.includes(2)? true: false} onClick={() => selecDay(2)}>S</DayDiv>
        <DayDiv selected={days.includes(3)? true: false} onClick={() => selecDay(3)}>T</DayDiv>
        <DayDiv selected={days.includes(4)? true: false} onClick={() => selecDay(4)}>Q</DayDiv>
        <DayDiv selected={days.includes(5)? true: false} onClick={() => selecDay(5)}>Q</DayDiv>
        <DayDiv selected={days.includes(6)? true: false} onClick={() => selecDay(6)}>S</DayDiv>
        <DayDiv selected={days.includes(7)? true: false} onClick={() => selecDay(7)}>S</DayDiv>
      </DivDias>
      <DivButtons>
        <div className="cancelar" onClick={() => setPlus(false)}>
          Cancelar
        </div>
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
  display: ${props => props.visible ? "flex" : "none" };
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
`;

const DayDiv = styled.div`
  width: 30px;
  height: 30px;
  color: ${(props) => (props.selected ? "#ffffff" : "#DBDBDB")};
  background: ${(props) => (props.selected ? "#CFCFCF" : "#ffffff")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DivButtons = styled.div`
  width: 303px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
  font-size: 15px;
  button {
    font-size: 15px;
    width: 85px;
    height: 35px;
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
