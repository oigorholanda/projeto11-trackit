import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { backgroundColor, darkBlue } from "../constants/colors";
import { base_url } from "../constants/urls";
import AuthContext from "../contexts/AuthContext";
import Footer from "./Footer";
import Habit from "./Habit";
import Header from "./Header";

export default function Today() {
  const [concluidos, setconcluidos] = useState(false);
  const [habits, setHabits] = useState([]);
  const { token } = useContext(AuthContext);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(`${base_url}/habits/today`, config)
      .then((res) => {
        console.log("Chegaram os dados");
        console.log(res.data);
        setHabits(res.data)
      })
      .catch((err) => {
        console.log(`Houve um erro! ${err.response.data.message}`);
        console.log(err.response);
      }); 
  }, [reload]);

  function concluir(){
    setconcluidos(true)
  }

  return (
    <>
      <Header />
      <ContainerBody>
        <HabitsTitle concluidos={concluidos}>
          <h3>Segunda, 17/05 </h3>
          <p  onClick={() => concluir()}>
            {!concluidos
              ? "Nenhum hábito concluído ainda"
              : "100% dos hábitos concluidos"}
          </p>
        </HabitsTitle>
      {habits.map((h) => <Habit key={h.id} name={h.name} props={h} reload={reload} setReload={setReload}/> )}

      </ContainerBody>

      <Footer />
    </>
  );
}

const ContainerBody = styled.div`
  width: 100vw;
  min-height: 560px;
  margin: 70px auto;
  padding: 20px;
  background-color: ${backgroundColor};
`;

const HabitsTitle = styled.div`
  margin: 10px 0 20px 0;
  color: ${darkBlue};
  h3 {
    font-size: 23px;
    margin-bottom: 15px;
  }
  p {
    font-size: 18px;
    color: ${(props) => props.concluidos? "#8FC549" : "#bababa"};
  }
`;
