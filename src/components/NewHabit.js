import axios from "axios";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { ligthBlue } from "../constants/colors";
import { base_url } from "../constants/urls";
import AuthContext from "../contexts/AuthContext";

export default function NewHabit({ plus, setPlus }) {
  const [days, setDays] = useState([]);
  const [name, setName] = useState("");
  const [loading, setloading] = useState(false);
  const { token } = useContext(AuthContext);

  function selecDay(day) {
    if (!days.includes(day)) {
      const novoarray = [...days, day];
      setDays(novoarray);
      console.log(novoarray);
    } else {
      const novoarray = days.filter((d) => d !== day);
      setDays(novoarray);
      console.log(novoarray);
    }
  }

  function saveHabit(event) {
    event.preventDefault();
    setloading(true);

    const body = {
      name, days
    };

    console.log(body);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(`${base_url}/habits`, body, config)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data.message));
  }

  return (
    <NewHabitContainer onSubmit={saveHabit} visible={plus}>
      Novo Hábito
      <input
        type="text"
        placeholder="nome do habito"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={loading}
        required
      />
      <DivDias>
        <DayDiv
          selected={days.includes(1) ? true : false}
          onClick={() => selecDay(1)}
          disabled={loading}
        >
          D
        </DayDiv>
        <DayDiv
          selected={days.includes(2) ? true : false}
          onClick={() => selecDay(2)}
          disabled={loading}
        >
          S
        </DayDiv>
        <DayDiv
          selected={days.includes(3) ? true : false}
          onClick={() => selecDay(3)}
          disabled={loading}
        >
          T
        </DayDiv>
        <DayDiv
          selected={days.includes(4) ? true : false}
          onClick={() => selecDay(4)}
          disabled={loading}
        >
          Q
        </DayDiv>
        <DayDiv
          selected={days.includes(5) ? true : false}
          onClick={() => selecDay(5)}
          disabled={loading}
        >
          Q
        </DayDiv>
        <DayDiv
          selected={days.includes(6) ? true : false}
          onClick={() => selecDay(6)}
          disabled={loading}
        >
          S
        </DayDiv>
        <DayDiv
          selected={days.includes(7) ? true : false}
          onClick={() => selecDay(7)}
          disabled={loading}
        >
          S
        </DayDiv>
      </DivDias>
      <DivButtons>
        <div className="cancelar" onClick={() => setPlus(false)}>
          Cancelar
        </div>
        <button type="submit">
          {!loading ? (
            "Salvar"
          ) : (
            <ThreeDots
              height="60"
              width="40"
              radius="9"
              color="white"
              ariaLabel="three-dots-loading"
              wrapperStyle={{ marginTop:-12, marginLeft: 16}}
              wrapperClassName=""
              visible={true}
            />
          )}
        </button>
      </DivButtons>
    </NewHabitContainer>
  );
}

const NewHabitContainer = styled.form`
  width: 89vw;
  height: 180px;
  background-color: white;
  display: ${(props) => (props.visible ? "flex" : "none")};
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
