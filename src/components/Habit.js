import styled from "styled-components";
import { textColor } from "../constants/colors";
import { useContext } from "react";
import { FiCheckSquare } from "react-icons/fi";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import { base_url } from "../constants/urls";

export default function Habit({ name, props, reload, setReload }) {
  const { token } = useContext(AuthContext);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function done(id) {
    axios
      .post(`${base_url}/habits/${id}/check`, {}, config)
      .then(() => {
        console.log("Marcado como concluido");
        setReload(!reload);
      })
      .catch((err) =>
        console.log(`Houve um erro! ${err.response.data.message}`)
      );
  }

  function remove(id) {
    axios
      .post(`${base_url}/habits/${id}/uncheck`, {}, config)
      .then(() => {
        console.log("Desmarcado como concluido");
        setReload(!reload);
      })
      .catch((err) =>
        console.log(`Houve um erro! ${err.response.data.message}`)
      );
  }

  return (
    <>
      <HabitContainer
        high={
          props.highestSequence !== 0 &&
          props.currentSequence >= props.highestSequence
            ? 1
            : 0
        }
      >
        <div>
          <h3>{name}</h3>
          <p>
            Sequência atual:<span> {props.currentSequence} dias</span>
          </p>
          <p>
            Seu recorde:<span> {props.highestSequence} dias</span>
          </p>
        </div>

        <FiCheckSquare
          color={props.done ? "#8FC549" : "#EBEBEB"}
          size={58}
          onClick={() => (props.done ? remove(props.id) : done(props.id))}
        />
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
  span {
    color: ${(props) => props.high && "#8FC549"};
  }
`;
