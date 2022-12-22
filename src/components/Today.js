import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { backgroundColor, darkBlue } from "../constants/colors";
import { base_url } from "../constants/urls";
import AuthContext from "../contexts/AuthContext";
import Footer from "./Footer";
import Habit from "./Habit";
import Header from "./Header";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
require("dayjs/locale/pt-br");

export default function Today() {
  const [habits, setHabits] = useState([]);
  const { token } = useContext(AuthContext);
  const [reload, setReload] = useState(false);
  const date = dayjs().locale("pt-br").format("dddd, DD/MM");
  const navigate = useNavigate();

  const concluded = habits.filter((hab) => hab.done);
  let value = ((concluded.length * 100) / habits.length).toFixed(0);

  if (value === "NaN") {
    value = 0;
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(`${base_url}/habits/today`, config)
      .then((res) => {
        console.log("Habitos de Hoje");
        console.log(res.data);
        setHabits(res.data);
      })
      .catch((err) => {
        console.log(`Houve um erro! ${err.response.data.message}`);
        console.log(err.response);
        {
          err.response.data.message === "Campo Header inválido!" &&
            navigate("/");
        }
      });
  }, [reload]);

  return (
    <>
      <Header />
      <ContainerBody>
        <HabitsTitle concluidos={value} reload={reload}>
          <h3> {date[0].toUpperCase() + date.substring(1)} </h3>
          <p>
            {value == 0
              ? "Nenhum hábito concluído hoje"
              : `${value}% dos hábitos concluidos`}
          </p>
        </HabitsTitle>
        {habits.map((h) => (
          <Habit
            key={h.id}
            name={h.name}
            props={h}
            reload={reload}
            setReload={setReload}
          />
        ))}
      </ContainerBody>

      <Footer value={value} reload={reload} />
    </>
  );
}

const ContainerBody = styled.div`
  width: 100vw;
  min-height: 560px;
  margin: 70px auto;
  padding: 20px;
  padding-bottom: 30px;
  background-color: ${backgroundColor};
`;

const HabitsTitle = styled.div`
  margin: 10px 0 20px 0;
  color: ${darkBlue};
  h3 {
    font-size: 23px;
    margin-bottom: 12px;
  }
  p {
    font-size: 18px;
    color: ${(props) => (props.concluidos != 0 ? "#8FC549" : "#bababa")};
  }
`;
