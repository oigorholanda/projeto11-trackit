import styled from "styled-components";
import { GoTrashcan } from "react-icons/go";
import { textColor } from "../constants/colors";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import { base_url } from "../constants/urls";

export default function UserHabit({id, title, days, setReload, reload}) {
    const { token } = useContext(AuthContext)

    function deleteHabit (id) {
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
      
          axios
            .delete(`${base_url}/habits/${id}`, config)
            .then((res) => {
              console.log("Habito Apagado");
              setReload(!reload)
            })
            .catch((err) => {
              console.log(`Houve um erro! ${err.response.data.message}`);
              console.log(err.response);
            });

    }
  return (
    <>
      <HabitContainer>
        <HabitsTitle>
          <h3>{title}</h3>
          <GoTrashcan size={17} onClick={() => deleteHabit(id)} />
        </HabitsTitle>
        <DivDias>
            <DayDiv selected={days.includes(1) ? true : false} >
            D
            </DayDiv>
            <DayDiv selected={days.includes(2) ? true : false} >
            S
            </DayDiv>
            <DayDiv selected={days.includes(3) ? true : false} >
            T
            </DayDiv>
            <DayDiv selected={days.includes(4) ? true : false} >
            Q
            </DayDiv>
            <DayDiv selected={days.includes(5) ? true : false} >
            Q
            </DayDiv>
            <DayDiv selected={days.includes(6) ? true : false} >
            S
            </DayDiv>
            <DayDiv selected={days.includes(7) ? true : false} >
            S
            </DayDiv>
      </DivDias>
      </HabitContainer>
    </>
  );
}

const HabitContainer = styled.div`
  width: 89vw;
  height: 95px;
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
  color: ${textColor};
  h3 {
    font-size: 20px;
    margin-bottom: 8px;
  }
`;

const HabitsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin-bottom: 5px;
`

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
